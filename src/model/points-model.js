import { UpdateType } from '../const';
import AbstractObservable from '../utils/abstract-observers';

class PointsModels extends AbstractObservable {
  #points = [];
  #apiService = null;

  constructor(apiService) {
    super();
    this.#apiService = apiService;
  }

  get points() {
    return this.#points;
  }

  init = async () => {
    try {
      const points = await this.#apiService.points;
      this.#points = points.map(this.#adaptToClient);
    } catch(err) {
      this.#points = [];
    }

    this._notify(UpdateType.INIT);
  }

  updatePoint = async (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    try {
      const response = await this.#apiService.updatePoint(update);
      const updatePoint = this.#adaptToClient(response);
      this.#points = [...this.#points.slice(0, index), update, ...this.#points.slice(index + 1)];
      this._notify(updateType, updatePoint);
    } catch (err) {
      throw new Error('Can\'t update point');
    }
  }

  addPoint = (updateType, update) => {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint = (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }

  #adaptToClient = (point) => {
    const adaptedPoint = {...point,
      startEventDate: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      endEventDate: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      isFavorite: point['is_favorite'],
      price: point['base_price'],
      pointType: point['type']
    };

    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];
    delete adaptedPoint['base_price'];
    delete adaptedPoint['type'];

    return adaptedPoint;
  }
}

export default PointsModels;
