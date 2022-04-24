/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
 //import dayjs from 'dayjs';

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

const offersByType = {
  'taxi': [{
    title: 'call business class',
    price: '10'
  }, {
    title: 'add seats',
    price: '5'
  }],
  'bus': [],
  'train': [{
    title: 'add linens',
    price: '5'
  }, {
    title: 'choose coupe',
    price: '15'
  }, {
    title: 'add food',
    price: '15'
  }],
  'ship': [{
    title: 'add luggage',
    price: '30'
  }, {
    title: 'take a tour',
    price: '20'
  }, {
    title: 'add dinner',
    price: '15'
  }, {
    title: 'fishing',
    price: 40
  }],
  'drive': [{
    title: 'refueling',
    price: '20'
  }, {
    title: 'add trailer',
    price: '100'
  }],
  'flight': [{
    title: 'add luggage',
    price: '30'
  }, {
    title: 'switch to comfort class',
    price: '40'
  }, {
    title: 'add meal',
    price: '15'
  }, {
    title: 'choose seat',
    price: '10'
  }, {
    title: 'travel by train',
    price: '40'
  }],
  'check-in': [{
    title: 'switch to comfort class',
    price: '40'
  }, {
    title: 'add meal',
    price: '15'
  }, {
    title: 'choose seat',
    price: '10'
  }],
  'sightseeing': [],
  'restaurant': [{
    title: 'add meal',
    price: '15'
  }, {
    title: 'take tips',
    price: '5'
  }, {
    title: 'asjdfjasdf',
    price: '234'
  }]
};

const generatePictures = () => {
  const picturesSrc = [];

  for (let i = 0; i <= 4; i++) {
    picturesSrc.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return picturesSrc;
};

const getTimePeriod = waitingTime => {
  const randomHour = getRandomIntInclusive(9, 23);
  const startRandomMinute = getRandomIntInclusive(0, 11) * 10;
  const startPeriod = new Date();
  startPeriod.setHours(randomHour, startRandomMinute);
  const endPeriod = new Date();
  endPeriod.setHours(startPeriod.getHours());
  endPeriod.setMinutes(startPeriod.getMinutes() + waitingTime);
  return [`${startPeriod.getHours()}:${startPeriod.getMinutes()}`, `${endPeriod.getHours()}:${endPeriod.getMinutes()}`];
};

const getWaitingTime = () => {
  const randomNumber = getRandomIntInclusive(1, 24);
  return randomNumber * 5;
};

const generatePoint = () => {
  const pointType = generatePointType();
  const waitingTime = getWaitingTime();
  return {
    pointType,
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(),
    price: getRandomIntInclusive(5, 200),
    destination: generateDestinationCity(),
    offers: offersByType,
    destinationInfo: {
      description: generateDescription(),
      pictures: generatePictures()
    },
    isFavorite: Boolean(getRandomIntInclusive(0, 1)),
    waitingTime: waitingTime,
    period: getTimePeriod(waitingTime)
  };
};

/***/ }),

/***/ "./src/presenter/Point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/Point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_point_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/point-view */ "./src/view/point-view.js");
/* harmony import */ var _view_offer_form_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/offer-form-view */ "./src/view/offer-form-view.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _pointContainer = /*#__PURE__*/new WeakMap();

var _point = /*#__PURE__*/new WeakMap();

var _pointComponent = /*#__PURE__*/new WeakMap();

var _pointEditComponent = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _replacePointToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToPoint = /*#__PURE__*/new WeakMap();

var _onEscKeydowm = /*#__PURE__*/new WeakMap();

var _handleFavorite = /*#__PURE__*/new WeakMap();

var _handleFormSubmit = /*#__PURE__*/new WeakMap();

class PointPresenter {
  constructor(pointContainer, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _pointContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointEditComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", point => {
      _classPrivateFieldSet(this, _point, point);

      const prevPointComponent = _classPrivateFieldGet(this, _pointComponent);

      const prevEditPointComponent = _classPrivateFieldGet(this, _pointEditComponent);

      _classPrivateFieldSet(this, _pointComponent, new _view_point_view__WEBPACK_IMPORTED_MODULE_0__["default"](point));

      _classPrivateFieldSet(this, _pointEditComponent, new _view_offer_form_view__WEBPACK_IMPORTED_MODULE_1__["default"](point));

      _classPrivateFieldGet(this, _pointComponent).setEditClickHandler(() => {
        _classPrivateFieldGet(this, _replacePointToForm).call(this);

        document.addEventListener('keydown', _classPrivateFieldGet(this, _onEscKeydowm));
      });

      _classPrivateFieldGet(this, _pointEditComponent).setFormSubmitHandler(() => {
        _classPrivateFieldGet(this, _replaceFormToPoint).call(this);

        document.removeEventListener('keydown', _classPrivateFieldGet(this, _onEscKeydowm));
      });

      _classPrivateFieldGet(this, _pointComponent).setFavoriteClickHandler(_classPrivateFieldGet(this, _handleFavorite));

      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(_classPrivateFieldGet(this, _pointContainer), _classPrivateFieldGet(this, _pointComponent), _render_js__WEBPACK_IMPORTED_MODULE_2__.renderPosition.BEFOREEND);

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT && prevPointComponent) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointComponent), prevPointComponent);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING && prevEditPointComponent) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointEditComponent), prevEditPointComponent);
      }

      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(prevPointComponent);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEditPointComponent);
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _pointEditComponent).reset(_classPrivateFieldGet(this, _point));

        _classPrivateFieldGet(this, _replaceFormToPoint).call(this);
      }
    });

    _defineProperty(this, "destroy", () => {
      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointComponent));
      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointEditComponent));
    });

    _classPrivateFieldInitSpec(this, _replacePointToForm, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointEditComponent), _classPrivateFieldGet(this, _pointComponent));

        _classPrivateFieldGet(this, _changeMode).call(this);

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToPoint, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointComponent), _classPrivateFieldGet(this, _pointEditComponent));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _onEscKeydowm, {
      writable: true,
      value: evt => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();

          _classPrivateFieldGet(this, _replaceFormToPoint).call(this);

          document.removeEventListener('keydown', _classPrivateFieldGet(this, _onEscKeydowm));
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleFavorite, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _point),
          isFavorite: !_classPrivateFieldGet(this, _point).isFavorite
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleFormSubmit, {
      writable: true,
      value: task => {
        _classPrivateFieldGet(this, _changeData).call(this, task);

        _classPrivateFieldGet(this, _replaceFormToPoint).call(this);
      }
    });

    _classPrivateFieldSet(this, _pointContainer, pointContainer);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/Trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/Trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _view_point_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/point-list-view */ "./src/view/point-list-view.js");
/* harmony import */ var _view_empty_points_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/empty-points-list */ "./src/view/empty-points-list.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _Point_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Point-presenter */ "./src/presenter/Point-presenter.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/common.js");
/* harmony import */ var _utils_sort_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/sort-functions */ "./src/utils/sort-functions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }









var _tripContainer = /*#__PURE__*/new WeakMap();

var _noPointsComponent = /*#__PURE__*/new WeakMap();

var _sortComponent = /*#__PURE__*/new WeakMap();

var _pointListComponent = /*#__PURE__*/new WeakMap();

var _boardPoints = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _sourceBoardPoints = /*#__PURE__*/new WeakMap();

var _currentSortType = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _handlePointChange = /*#__PURE__*/new WeakMap();

var _handleSortTypeChange = /*#__PURE__*/new WeakMap();

var _sortPoints = /*#__PURE__*/new WeakMap();

var _renderPoint = /*#__PURE__*/new WeakMap();

var _renderPoints = /*#__PURE__*/new WeakMap();

var _clearPointList = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderNoPoints = /*#__PURE__*/new WeakMap();

var _renderBoard = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor(tripContainer) {
    _classPrivateFieldInitSpec(this, _tripContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _noPointsComponent, {
      writable: true,
      value: new _view_empty_points_list__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _sortComponent, {
      writable: true,
      value: new _view_sort_view__WEBPACK_IMPORTED_MODULE_0__["default"]()
    });

    _classPrivateFieldInitSpec(this, _pointListComponent, {
      writable: true,
      value: new _view_point_list_view__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });

    _classPrivateFieldInitSpec(this, _boardPoints, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(this, _sourceBoardPoints, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: null
    });

    _defineProperty(this, "init", boardPoints => {
      _classPrivateFieldSet(this, _boardPoints, [...boardPoints]);

      _classPrivateFieldSet(this, _sourceBoardPoints, [...boardPoints]);

      (0,_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _pointListComponent), _render_js__WEBPACK_IMPORTED_MODULE_3__.renderPosition.BEFOREEND);

      _classPrivateFieldGet(this, _renderBoard).call(this);
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(element => element.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _handlePointChange, {
      writable: true,
      value: updatePoint => {
        _classPrivateFieldSet(this, _boardPoints, (0,_common__WEBPACK_IMPORTED_MODULE_5__.updateItem)(_classPrivateFieldGet(this, _boardPoints), updatePoint));

        _classPrivateFieldGet(this, _pointPresenter).get(updatePoint.id).init(updatePoint);
      }
    });

    _classPrivateFieldInitSpec(this, _handleSortTypeChange, {
      writable: true,
      value: sortType => {
        if (_classPrivateFieldGet(this, _currentSortType) === sortType) {
          return;
        }

        _classPrivateFieldGet(this, _sortPoints).call(this, sortType);

        _classPrivateFieldGet(this, _clearPointList).call(this);

        _classPrivateFieldGet(this, _renderPoints).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _sortPoints, {
      writable: true,
      value: sortType => {
        switch (sortType) {
          case _utils_sort_functions__WEBPACK_IMPORTED_MODULE_6__.SortType.PRICE.text:
            _classPrivateFieldGet(this, _boardPoints).sort(_utils_sort_functions__WEBPACK_IMPORTED_MODULE_6__.sortPointsByPrice);

            break;

          case _utils_sort_functions__WEBPACK_IMPORTED_MODULE_6__.SortType.TIME.text:
            _classPrivateFieldGet(this, _boardPoints).sort(_utils_sort_functions__WEBPACK_IMPORTED_MODULE_6__.sortPointsByTime);

            break;

          default:
            _classPrivateFieldSet(this, _boardPoints, [..._classPrivateFieldGet(this, _sourceBoardPoints)]);

        }

        _classPrivateFieldSet(this, _currentSortType, sortType);
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoint, {
      writable: true,
      value: point => {
        const pointPresenter = new _Point_presenter__WEBPACK_IMPORTED_MODULE_4__["default"](_classPrivateFieldGet(this, _pointListComponent), _classPrivateFieldGet(this, _handlePointChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(point);

        _classPrivateFieldGet(this, _pointPresenter).set(point.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoints, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _boardPoints).forEach(boardPoint => _classPrivateFieldGet(this, _renderPoint).call(this, boardPoint));
      }
    });

    _classPrivateFieldInitSpec(this, _clearPointList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.destroy());

        _classPrivateFieldGet(this, _pointPresenter).clear();
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _sortComponent), _render_js__WEBPACK_IMPORTED_MODULE_3__.renderPosition.AFTERBEGIN);

        _classPrivateFieldGet(this, _sortComponent).setSortChengeClickHandler(_classPrivateFieldGet(this, _handleSortTypeChange));
      }
    });

    _classPrivateFieldInitSpec(this, _renderNoPoints, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _noPointsComponent), _render_js__WEBPACK_IMPORTED_MODULE_3__.renderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _renderBoard, {
      writable: true,
      value: () => {
        if (_classPrivateFieldGet(this, _boardPoints).length === 0) {
          _classPrivateFieldGet(this, _renderNoPoints).call(this);

          return;
        }

        _classPrivateFieldGet(this, _renderSort).call(this);

        _classPrivateFieldGet(this, _renderPoints).call(this);
      }
    });

    _classPrivateFieldSet(this, _tripContainer, tripContainer);
  }

}

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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
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
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/utils/sort-functions.js":
/*!*************************************!*\
  !*** ./src/utils/sort-functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortType": () => (/* binding */ SortType),
/* harmony export */   "sortPointsByTime": () => (/* binding */ sortPointsByTime),
/* harmony export */   "sortPointsByPrice": () => (/* binding */ sortPointsByPrice)
/* harmony export */ });
const SortType = {
  DAY: {
    text: 'day',
    checked: true
  },
  TIME: {
    text: 'time',
    checked: false
  },
  PRICE: {
    text: 'price',
    checked: false
  }
};
const sortPointsByTime = (pointA, pointB) => pointB.waitingTime - pointA.waitingTime;
const sortPointsByPrice = (pointA, pointB) => pointB.price - pointA.price;

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
/* harmony import */ var _smart_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-view */ "./src/view/smart-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

 // createPointEditDestinationTemplate = (destination, isPointDestination) => {
// };

const createPointEditOffersTemplate = (pointType, offers) => {
  //const offerListInPoint =  document.querySelector('.event__available-offers');
  for (const offer of offers[pointType]) {
    return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden"  type="checkbox" name="event-offer-luggage">
    <label class="event__offer-label" for="event-offer-luggage-1">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`; //render(offerListInPoint, offerItem, renderPosition.BEFOREEND);
  }
};

const createOfferForm = data => {
  const {
    pointType,
    destination,
    price,
    destinationInfo,
    isPointDestination,
    offers
  } = data;
  const offersOfType = offers[pointType];
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

var _setInnerHandlers = /*#__PURE__*/new WeakMap();

var _destinationInputHandler = /*#__PURE__*/new WeakMap();

var _pointTypeHandler = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

class OfferFormView extends _smart_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  //#point = null;
  constructor(_point) {
    super(); //this.#point = point;

    _defineProperty(this, "reset", point => {
      this.updateData(OfferFormView.parsePointToData(point));
    });

    _defineProperty(this, "restoreHandlers", () => {
      _classPrivateFieldGet(this, _setInnerHandlers).call(this);

      this.setFormSubmitHandler(this._callback.formSubmit);
    });

    _classPrivateFieldInitSpec(this, _setInnerHandlers, {
      writable: true,
      value: () => {
        this.element.querySelector('.event__input--destination').addEventListener('change', _classPrivateFieldGet(this, _destinationInputHandler));
        this.element.querySelectorAll('.event__type-input').forEach(element => {
          element.addEventListener('click', _classPrivateFieldGet(this, _pointTypeHandler));
        });
      }
    });

    _classPrivateFieldInitSpec(this, _destinationInputHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          destination: evt.target.value //!this._data.isPointDestination

        }, true);
      }
    });

    _classPrivateFieldInitSpec(this, _pointTypeHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          pointType: evt.target.value
        });
      }
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('.event--edit').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit(OfferFormView.parseDataToPoint(this._data));
      }
    });

    this._data = OfferFormView.parsePointToData(_point);

    _classPrivateFieldGet(this, _setInnerHandlers).call(this);
  }

  get template() {
    return createOfferForm(this._data);
  }

}

_defineProperty(OfferFormView, "parsePointToData", point => ({ ...point,
  isPointDestination: point.destination !== null
}));

_defineProperty(OfferFormView, "parseDataToPoint", data => {
  const point = { ...data
  };

  if (!point.isPointDestination) {
    point.destination = null;
  }

  delete point.isPointDestination;
  return point;
});

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

 // const createOffersTemplate = (offer) => {
//   const offerList = document.querySelector('.event__selected-offers');
//   if (offer.offers.length !== 0) {
//     for (let i = 0; i <= offer.offers.length; i++) {
//       offerList.insertAdjacentHTML('afterbegin', `<li class="event__offer">
//       <span class="event__offer-title">${offer.offers[i].title} </span>
//       &plus;&euro;&nbsp;
//       <span class="event__offer-price">${offer.offers[i].price}</span>
//     </li>`);
//     }
//   }
// };

const createPointTemplate = point => {
  const {
    pointType,
    price,
    destination,
    isFavorite,
    waitingTime,
    period
  } = point;
  const favoriteClassName = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';
  return `<li class="trip-events__item">
        <div class="event">
          <time class="event__date" datetime="2019-03-18">MAR 18</time>
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
          </div>
          <h3 class="event__title">${pointType} ${destination}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T10:30">${period[0]}</time>
              &mdash;
              <time class="event__end-time" datetime="2019-03-18T11:00">${period[1]}</time>
            </p>
            <p class="event__duration">${waitingTime}M</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${price}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">

          </ul>
          <button class="${favoriteClassName}" type="button">
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

var _favoriteClickHandler = /*#__PURE__*/new WeakMap();

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

    _defineProperty(this, "setFavoriteClickHandler", callback => {
      this._callback.favoriteClick = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _favoriteClickHandler));
    });

    _classPrivateFieldInitSpec(this, _editClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _classPrivateFieldInitSpec(this, _favoriteClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.favoriteClick();
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

/***/ "./src/view/smart-view.js":
/*!********************************!*\
  !*** ./src/view/smart-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SmartView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_data", {});

    _defineProperty(this, "updateElement", () => {
      const prevElement = this.element;
      const parent = prevElement.parentElement;
      this.removeElement();
      const newElement = this.element;
      parent.replaceChild(newElement, prevElement);
      this.restoreHandlers();
    });

    _defineProperty(this, "updateData", (update, justDataUpdating) => {
      if (!update) {
        return;
      }

      this._data = { ...this._data,
        ...update
      };

      if (justDataUpdating) {
        return;
      }

      this.updateElement();
    });

    _defineProperty(this, "restoreHandlers", () => {
      throw new Error('Abstract nethod not implemented: restoreHandlers');
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartView);

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
/* harmony import */ var _utils_sort_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sort-functions.js */ "./src/utils/sort-functions.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



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
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${_utils_sort_functions_js__WEBPACK_IMPORTED_MODULE_1__.SortType.TIME.text}">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_utils_sort_functions_js__WEBPACK_IMPORTED_MODULE_1__.SortType.PRICE.text}">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>
  `;

var _SortChangeHandler = /*#__PURE__*/new WeakMap();

class SortView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setSortChengeClickHandler", callback => {
      this._callback.sortChange = callback;
      document.querySelectorAll('.trip-sort__input').forEach(element => element.addEventListener('click', _classPrivateFieldGet(this, _SortChangeHandler)));
    });

    _classPrivateFieldInitSpec(this, _SortChangeHandler, {
      writable: true,
      value: evt => {
        if (evt.target.checked === true) {
          this._callback.sortChange(evt.target.dataset.sortType);
        }
      }
    });
  }

  get template() {
    return CreateSortTemplate;
  }

}

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");
/* harmony import */ var _presenter_Trip_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presenter/Trip-presenter */ "./src/presenter/Trip-presenter.js");






const POINT_COUNT = 4;
const points = Array.from({
  length: POINT_COUNT
}, _mock_point__WEBPACK_IMPORTED_MODULE_4__.generatePoint);
const tripBody = document.querySelector('.page-body');
const headerMenu = tripBody.querySelector('.trip-main');
const siteMenuElement = tripBody.querySelector('.trip-controls__navigation');
const filtersElement = tripBody.querySelector('.trip-controls__filters');
const mainContainer = tripBody.querySelector('.trip-events');
const tripPresenter = new _presenter_Trip_presenter__WEBPACK_IMPORTED_MODULE_5__["default"](mainContainer);

if (points.length !== 0) {
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(headerMenu, new _view_header_info_view__WEBPACK_IMPORTED_MODULE_0__["default"](points[0]).element, _render__WEBPACK_IMPORTED_MODULE_3__.renderPosition.AFTERBEGIN);
}

(0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(siteMenuElement, new _view_site_menu_view__WEBPACK_IMPORTED_MODULE_1__["default"](), _render__WEBPACK_IMPORTED_MODULE_3__.renderPosition.BEFOREEND);
(0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(filtersElement, new _view_filter_view__WEBPACK_IMPORTED_MODULE_2__["default"](), _render__WEBPACK_IMPORTED_MODULE_3__.renderPosition.BEFOREEND);
tripPresenter.init(points);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map