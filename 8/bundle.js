/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateDescription = () => {
  const description = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'];
  return description.slice(0, getRandomIntInclusive(1, 5));
};

const generatePointType = () => {
  const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
  return pointTypes[getRandomIntInclusive(0, pointTypes.length - 1)];
};

const generateDestinationCity = () => {
  const cities = ['Ekaterinburg', 'Moscow', 'Perm', 'Kyiv', 'Paris', 'Prague', 'Amsterdam'];
  return cities[getRandomIntInclusive(0, cities.length - 1)];
};

const generateOffers = () => {
  const offers = [];

  for (let i = 0; i < getRandomIntInclusive(0, 5); i++) {
    offers.push({
      id: i,
      title: 'example title',
      price: getRandomIntInclusive(10, 100)
    });
  }

  return offers;
};

const generatePictures = () => {
  const picturesSrc = [];

  for (let i = 0; i <= 4; i++) {
    picturesSrc.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return picturesSrc;
};

const generatePoint = () => {
  const pointType = generatePointType();
  return {
    pointType,
    price: getRandomIntInclusive(5, 200),
    destination: generateDestinationCity(),
    offer: {
      type: pointType,
      offers: generateOffers()
    },
    destinationInfo: {
      description: generateDescription(),
      pictures: generatePictures()
    }
  };
};

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPosition": () => (/* binding */ renderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract-view */ "./src/view/abstract-view.js");

const renderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case renderPosition.BEFOREBEGIN:
      {
        parent.before(child);
        break;
      }

    case renderPosition.AFTERBEGIN:
      {
        parent.prepend(child);
        break;
      }

    case renderPosition.BEFOREEND:
      {
        parent.append(child);
        break;
      }

    case renderPosition.AFTEREND:
      {
        parent.after(child);
        break;
      }
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract view method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/empty-points-list.js":
/*!***************************************!*\
  !*** ./src/view/empty-points-list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageWithoutPoints)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createEmptyList = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

class MessageWithoutPoints extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createEmptyList();
  }

}

/***/ }),

/***/ "./src/view/filter-view.js":
/*!*********************************!*\
  !*** ./src/view/filter-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");

const createFilterTemplate = `<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form> `;
class FilterView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createFilterTemplate;
  }

}

/***/ }),

/***/ "./src/view/header-info-view.js":
/*!**************************************!*\
  !*** ./src/view/header-info-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderInfoView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const createHeaderInfoTemplate = pointStart => {
  const {
    destination
  } = pointStart;
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${destination} &mdash; Chamonix</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`;
};

var _element = /*#__PURE__*/new WeakMap();

var _pointStart = /*#__PURE__*/new WeakMap();

class HeaderInfoView {
  constructor(pointStart) {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointStart, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _pointStart, pointStart);
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return createHeaderInfoTemplate(_classPrivateFieldGet(this, _pointStart));
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/offer-form-view.js":
/*!*************************************!*\
  !*** ./src/view/offer-form-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OfferFormView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const createOfferForm = point => {
  const {
    pointType,
    destination,
    destinationInfo
  } = point;
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
                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
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
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
                <label class="event__offer-label" for="event-offer-luggage-1">
                  <span class="event__offer-title">Add luggage</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
                <label class="event__offer-label" for="event-offer-comfort-1">
                  <span class="event__offer-title">Switch to comfort class</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">100</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
                <label class="event__offer-label" for="event-offer-meal-1">
                  <span class="event__offer-title">Add meal</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">15</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
                <label class="event__offer-label" for="event-offer-seats-1">
                  <span class="event__offer-title">Choose seats</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">5</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
                <label class="event__offer-label" for="event-offer-train-1">
                  <span class="event__offer-title">Travel by train</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">40</span>
                </label>
              </div>
            </div>
          </section>

          <section class="event__section  event__section--destination">
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
          </section>
        </section>
      </form>
    </li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

class OfferFormView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('click', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createOfferForm(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/point-list-view.js":
/*!*************************************!*\
  !*** ./src/view/point-list-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointListView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createPointListTemplate = () => '<div class="trip-events__list"></div>';

class PointListView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createPointListTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-view.js":
/*!********************************!*\
  !*** ./src/view/point-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const createPointTemplate = point => {
  const {
    pointType,
    price,
    destination,
    offer
  } = point;
  return `<li class="trip-events__item">
        <div class="event">
          <time class="event__date" datetime="2019-03-18">MAR 18</time>
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
          </div>
          <h3 class="event__title">${pointType} ${destination}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
              &mdash;
              <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
            </p>
            <p class="event__duration">30M</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${price}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
            <li class="event__offer">
              <span class="event__offer-title">${offer.offers[0].title !== null ? offer.offers[0].title : ''} </span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${offer.offers[0].price !== null ? offer.offers[0].price : ''}</span>
            </li>
          </ul>
          <button class="event__favorite-btn event__favorite-btn--active" type="button">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
            </svg>
          </button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>
`;
};

var _point = /*#__PURE__*/new WeakMap();

var _editClickHandler = /*#__PURE__*/new WeakMap();

class PointView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setEditClickHandler", callback => {
      this._callback.editClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _editClickHandler));
    });

    _classPrivateFieldInitSpec(this, _editClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createPointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/site-menu-view.js":
/*!************************************!*\
  !*** ./src/view/site-menu-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenuView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createSiteMenuTemplate = () => `<div class="trip-controls__navigation">
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>
  </div>
  `;

class SiteMenuView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");

const CreateSortTemplate = `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>
  `;
class SortView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return CreateSortTemplate;
  }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_header_info_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/header-info-view */ "./src/view/header-info-view.js");
/* harmony import */ var _view_site_menu_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/site-menu-view */ "./src/view/site-menu-view.js");
/* harmony import */ var _view_filter_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filter-view */ "./src/view/filter-view.js");
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _view_point_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/point-view */ "./src/view/point-view.js");
/* harmony import */ var _view_offer_form_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/offer-form-view */ "./src/view/offer-form-view.js");
/* harmony import */ var _view_point_list_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/point-list-view */ "./src/view/point-list-view.js");
/* harmony import */ var _view_empty_points_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/empty-points-list */ "./src/view/empty-points-list.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");










const POINT_COUNT = 4;
const points = Array.from({
  length: POINT_COUNT
}, _mock_point__WEBPACK_IMPORTED_MODULE_9__.generatePoint);
const tripBody = document.querySelector('.page-body');
const headerMenu = tripBody.querySelector('.trip-main');
const siteMenuElement = tripBody.querySelector('.trip-controls__navigation');
const filtersElement = tripBody.querySelector('.trip-controls__filters');
const mainContainer = tripBody.querySelector('.trip-events');

const renderPoint = (pointListElement, point) => {
  const pointComponent = new _view_point_view__WEBPACK_IMPORTED_MODULE_4__["default"](point);
  const pointEditComponent = new _view_offer_form_view__WEBPACK_IMPORTED_MODULE_5__["default"](point);

  const replacePointToForm = () => {
    pointListElement.replaceChild(pointEditComponent.element, pointComponent.element);
  };

  const replaceFormToPoint = () => {
    pointListElement.replaceChild(pointComponent.element, pointEditComponent.element);
  };

  const onEscKeydowm = evt => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeydowm);
    }
  };

  pointComponent.setEditClickHandler(() => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeydowm);
  });
  pointEditComponent.setFormSubmitHandler(() => {
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeydowm);
  });
  (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(pointListElement, pointComponent, _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.BEFOREEND);
};

const pointListComponent = new _view_point_list_view__WEBPACK_IMPORTED_MODULE_6__["default"]();
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(mainContainer, pointListComponent, _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(siteMenuElement, new _view_site_menu_view__WEBPACK_IMPORTED_MODULE_1__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(filtersElement, new _view_filter_view__WEBPACK_IMPORTED_MODULE_2__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.BEFOREEND);

if (points.length === 0) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(pointListComponent, new _view_empty_points_list__WEBPACK_IMPORTED_MODULE_7__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.BEFOREEND);
} else {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(headerMenu, new _view_header_info_view__WEBPACK_IMPORTED_MODULE_0__["default"](points[0]).element, _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.AFTERBEGIN);
  (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.render)(mainContainer, new _view_sort_view__WEBPACK_IMPORTED_MODULE_3__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_8__.renderPosition.AFTERBEGIN);

  for (let i = 0; i < POINT_COUNT; i++) {
    renderPoint(pointListComponent.element, points[i]);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map