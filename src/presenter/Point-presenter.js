import PointView from '../view/point-view';
import OfferFormView from '../view/offer-form-view';
import { render, renderPosition, replace } from '../render.js';


export default class PointPresenter {
  #pointContainer = null;

  #point = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #changeData = null;

  constructor(pointContainer, changeData) {
    this.#pointContainer = pointContainer;
    this.#changeData = changeData;
  }

  init = (point) => {
    this.#point = point;
    this.#pointComponent = new PointView(point);
    this.#pointEditComponent = new OfferFormView(point);

    this.#pointComponent.setEditClickHandler(() => {
      this.#replacePointToForm();
      document.addEventListener('keydown', this.#onEscKeydowm);
    });
    this.#pointEditComponent.setFormSubmitHandler(() => {
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeydowm);
    });
    this.#pointComponent.setFavoriteClickHandler(this.#handleFavorite);

    render(this.#pointContainer, this.#pointComponent, renderPosition.BEFOREEND);
  }


  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
  }

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
  }

  #onEscKeydowm = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeydowm);
    }
  }

  #handleFavorite = () => {
    this.#changeData({...this.#point, isFavorite: !this.#point.isFavorite});
  }

  #handleFormSubmit = (task) => {
    this.#changeData(task);
    this.#replaceFormToPoint();
  }
}
