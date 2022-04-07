import HeaderInfoView from '../view/header-info-view';
import SiteMenuView from '../view/site-menu-view';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
// import PointView from '../view/point-view';
// import OfferFormView from '../view/offer-form-view';
import PointListView from '../view/point-list-view';
import MessageWithoutPoints from '../view/empty-points-list';
import { render, renderPosition } from '../render.js';
import PointPresenter from './Point-presenter';


export default class TripPresenter {
  #tripContainer = null;

  #noPointsComponent = new MessageWithoutPoints();
  #sortComponent = new SortView()
  #headerInfoComponent = new HeaderInfoView();
  #siteMenuComponent = new SiteMenuView();
  #filterComponent = new FilterView();
  // #pointComponent = new PointView();
  // #pointEditedComponent = new OfferFormView();
  #pointListComponent = new PointListView();

  #boardPoints = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (boardPoints) => {
    this.#boardPoints = [...boardPoints];

    render(this.#tripContainer, this.#pointListComponent, renderPosition.BEFOREEND);

    this.#renderBoard();
  }

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent);
    pointPresenter.init(point);
  };

  #renderPoints = () => {
    this.#boardPoints
      .forEach((boardPoint) => this.#renderPoint(boardPoint));
  }

  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, renderPosition.AFTERBEGIN);
  }


  #renderNoPoints = () => {
    render(this.#tripContainer, this.#noPointsComponent, renderPosition.BEFOREEND);
  }

  #renderBoard = () => {
    if (this.#boardPoints.length === 0) {
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderPoints();

  }
}
