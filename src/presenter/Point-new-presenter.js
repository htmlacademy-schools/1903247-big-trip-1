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


    this.#pointEditComponent.setFormSubmitHandler(() => {
      document.removeEventListener('keydown', this.#onEscKeydowm);
    });

    render(this.#pointContainer, this.#pointEditComponent, renderPosition.AFTERBEGIN);
  }

  destroy = () => {
    remove(this.#point);
    remove(this.#pointEditComponent);
  }

  #onEscKeydowm = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  }

  #handleFormSubmit = (update) => {
    const isMinorUpdate = false;

    this.#changeData(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR: UpdateType.PATCH,
      update
    );
  }

  #handleDeleteClick = () => {
    this.destroy();
  }
}
