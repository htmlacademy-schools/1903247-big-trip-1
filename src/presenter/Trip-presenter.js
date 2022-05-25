import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import MessageWithoutPoints from '../view/empty-points-list';
import { remove, render, renderPosition } from '../render.js';
import PointPresenter from './Point-presenter';

import { SortType, sortPointsByPrice, sortPointsByTime } from '../utils/sort-functions';
import { UpdateType, UserAction } from '../const';
import PointNewPresenter from './Point-new-presenter';
import { generatePoint } from '../mock/point';


export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;

  #noPointsComponent = new MessageWithoutPoints();
  #sortComponent = null;
  #pointListComponent = new PointListView();


  #pointPresenter = new Map();
  #pointNewPresenter = null;
  #currentSortType = null;

  #renderedTotalPrice = 0;

  constructor(tripContainer, pointsModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;

    this.#pointNewPresenter = new PointNewPresenter(this.#pointListComponent, this.#handleViewAction);

    this.#pointsModel.addObserver(this.#handleModeEvent);
  }

  get points() {
    switch (this.#currentSortType) {
      case SortType.PRICE.text:
        return [... this.#pointsModel.points].sort(sortPointsByPrice);
      case SortType.TIME.text:
        return [...this.#pointsModel.points].sort(sortPointsByTime);
    }

    return this.#pointsModel.points;
  }

  init = () => {

    render(this.#tripContainer, this.#pointListComponent, renderPosition.BEFOREEND);

    this.#renderBoard();
  }

  createNewPoint = () => {
    const point = generatePoint();
    point.destination = '';
    point.pointType = 'taxi';
    point.price = 0;

    const createNewPointData = {...point, isCreatePoint: true};
    this.#currentSortType = SortType.DAY;
    //this.#handleModeChange();
    this.#pointNewPresenter.init(createNewPointData);
  }

  #handleModeEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetRenderedTotalPrice: true, resetSortType: true});
        this.#renderBoard();
        break;
    }
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
    }
  }

  #handleModeChange = () => {
    this.#pointNewPresenter.destroy();
    this.#pointPresenter.forEach((element) => element.resetView());
  }

  #handlePointChange = (updatePoint) => {
    this.#pointPresenter.get(updatePoint.id).init(updatePoint);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    // this.#clearPointList();
    // this.#renderPoints(this.points);
    this.#clearBoard();
    this.#renderBoard();
  }

  // #sortPoints = (sortType) => {
  //   switch (sortType) {
  //     case SortType.PRICE.text:
  //       this.#boardPoints.sort(sortPointsByPrice);
  //       break;
  //     case SortType.TIME.text:
  //       this.#boardPoints.sort(sortPointsByTime);
  //       break;
  //     default:
  //       this.#boardPoints = [...this.#sourceBoardPoints];
  //   }

  //   this.#currentSortType = sortType;
  // }

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent, this.#handleViewAction, this.#handleModeChange);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #renderPoints = (points) => {
    points.forEach((point) => this.#renderPoint(point));
  }

  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);

    render(this.#tripContainer, this.#sortComponent, renderPosition.AFTERBEGIN);
    this.#sortComponent.setSortChangeClickHandler(this.#handleSortTypeChange);
  }


  #renderNoPoints = () => {
    render(this.#tripContainer, this.#noPointsComponent, renderPosition.BEFOREEND);
  }

  #clearBoard = ({ resetRenderedTotalPrice = false, resetSortType = false } = {}) => {
    const totalPointsPrice = 0;
    //this.points.price.forEach((sum, price) => sum + price);

    this.#pointNewPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    remove(this.#sortComponent);
    remove(this.#noPointsComponent);

    if (resetRenderedTotalPrice) {
      this.#renderedTotalPrice = this.#renderedTotalPrice;
    } else {
      this.#renderedTotalPrice = Math.min(totalPointsPrice, this.#renderedTotalPrice);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderBoard = () => {
    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderPoints(this.points);

  }
}
