import SmartView from './smart-view';
import { render, renderPosition } from '../render';

const BLANK_POINT = {
  destination: '',
  description: '',
  time: null,
  price: '',
  isFavorite: false
};

// createPointEditDestinationTemplate = (destination, isPointDestination) => {

// };

const createPointEditOffersTemplate = (pointType, offers) => {
  const offerListInPoint =  document.querySelector('.event__available-offers');
  for (const offer of offers[pointType]) {
    return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden"  type="checkbox" name="event-offer-luggage">
    <label class="event__offer-label" for="event-offer-luggage-1">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`;

    //render(offerListInPoint, offerItem, renderPosition.BEFOREEND);
  }
}

const createOfferForm = (data) => {
  const { pointType, destination, price, destinationInfo, isPointDestination, offers } = data;
  const offersOfType = offers[pointType];
  //const checked = isChecked ? 'checked' : '';
  //const inputType = document.

  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                <div class="event__type-item">
                  <input ${pointType === 'taxi' ? 'checked' : ''} id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" >
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'bus' ? 'checked' : ''} id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'train' ? 'checked' : ''} id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'ship' ? 'checked' : ''} id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'drive' ? 'checked' : ''} id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'flight' ? 'checked' : ''} id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'check in' ? 'checked' : ''} id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'sightseeing' ? 'checked' : ''} id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input ${pointType === 'restaraunt' ? 'checked' : ''} id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${pointType}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">

          ${offersOfType.length !== 0 ? `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${createPointEditOffersTemplate(pointType, offers)}
            </div>
          </section>` : ''}

          ${isPointDestination ? `<section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destinationInfo.description}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
                <img class="event__photo" src="${destinationInfo.pictures[0]}" alt="Event photo">
                <img class="event__photo" src="${destinationInfo.pictures[1]}" alt="Event photo">
                <img class="event__photo" src="${destinationInfo.pictures[2]}" alt="Event photo">
                <img class="event__photo" src="${destinationInfo.pictures[3]}" alt="Event photo">
                <img class="event__photo" src="${destinationInfo.pictures[4]}" alt="Event photo">
              </div>
            </div>
          </section>` : ''}


        </section>
      </form>
    </li>`;
};

export default class OfferFormView extends SmartView {
  //#point = null;

  constructor(point) {
    super();
    //this.#point = point;
    this._data = OfferFormView.parsePointToData(point);
    this.#setInnerHandlers();
  }

  get template() {
    return createOfferForm(this._data);
  }

  reset = (point) => {
    this.updateData(OfferFormView.parsePointToData(point));
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setFormSubmitHandler(this._callback.formSubmit);
  }

  #setInnerHandlers = () => {
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationInputHandler);
    this.element.querySelectorAll('.event__type-input').forEach((element) => {
      element.addEventListener('click', this.#pointTypeHandler);
    });
  }

  #destinationInputHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      destination: evt.target.value  //!this._data.isPointDestination
    }, true);
  }

  #pointTypeHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      pointType: evt.target.value
    });
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('.event--edit').addEventListener('submit', this.#formSubmitHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(OfferFormView.parseDataToPoint(this._data));
  }


  static parsePointToData = (point) => ({
    ...point,
    //isFavorite: point.isFavorite !== null;
    isPointDestination: point.destination !== null,
    //isPointOffers: point.offers.offer !== null,
  });

  static parseDataToPoint = (data) => {
    const point = { ...data };

    if (!point.isPointDestination) {
      point.destination = null;
    }

    delete point.isPointDestination;

    return point;
  }
}
