import AbstractObservable from '../utils/abstract-observers';

class PointsModels extends AbstractObservable{
  #points = [];

  set points(points) {
    this.#points = [...points];
  }

  get points() {
    return this.#points;
  }
}

export default PointsModels;
