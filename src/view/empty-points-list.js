import {createElement} from '../render.js';

const createEmptyList = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class MessageWithoutPoints {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createEmptyList();
  }

  removeElement() {
    this.#element = null;
  }
}
