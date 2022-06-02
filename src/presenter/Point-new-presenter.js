import OfferFormView from '../view/offer-form-view';
import { remove, render, renderPosition } from '../render';
import { UpdateType, UserAction } from '../const';

export default class PointNewPresenter {
  #pointContainer = null;

  #point = null;
  #pointEditComponent = null;
  #changeData = null;

  #newPoint = null;

  constructor(pointContainer, changeData) {
    this.#pointContainer = pointContainer;
    this.#changeData = changeData;
  }

  init = (newPoint) => {
    this.#newPoint = newPoint;

    if (this.#pointEditComponent !== null) {
      return;
    }

    this.#pointEditComponent = new OfferFormView(this.#newPoint);

    this.#pointEditComponent.setDeleteClickHandler(this.#handleDeleteClick);
    this.#pointEditComponent.setFormSubmitHandler(this.#handleFormSubmit);

    render(this.#pointContainer, this.#pointEditComponent, renderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#onEscKeydowm);
  }

  destroy = () => {
    remove(this.#point);
    remove(this.#pointEditComponent);

    document.removeEventListener('keydown', this.#onEscKeydowm);
  }

  #onEscKeydowm = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  }

  #handleFormSubmit = (update) => {
    this.#changeData(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      update
    );
    this.destroy();
  }

  #handleDeleteClick = () => {
    this.destroy();
  }
}
