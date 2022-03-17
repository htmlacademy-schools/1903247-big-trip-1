import {createHeaderInfoTemplate} from './view/header-info-view';
import {createSiteMenuTemplate} from './view/site-menu-view';
import {createFilterTemplate} from './view/filter-view';
import {CreateSortTemplate} from './view/sort-view';
import { createPointTemplate } from './view/point-view';
import { createOfferForm } from './view/offer-form-view';

import {renderTemplate, renderPosition} from './render.js';
import { generatePoint } from './mock/point';


const POINT_COUNT = 5;
const points = Array.from({length: POINT_COUNT}, generatePoint);

const tripBody = document.querySelector('.page-body');
const headerMenu = tripBody.querySelector('.trip-main');
const siteMenuElement = tripBody.querySelector('.trip-controls__navigation');
const filtersElement = tripBody.querySelector('.trip-controls__filters');
const tripEventsElem = tripBody.querySelector('.trip-events');


renderTemplate(headerMenu, createHeaderInfoTemplate(points[0]), renderPosition.AFTERBEGIN);
renderTemplate(siteMenuElement, createSiteMenuTemplate(), renderPosition.BEFOREEND);
renderTemplate(filtersElement, createFilterTemplate, renderPosition.BEFOREEND);
renderTemplate(tripEventsElem, CreateSortTemplate, renderPosition.BEFOREEND);

renderTemplate(tripEventsElem, createOfferForm(points[0]), renderPosition.BEFOREEND);
for (let i = 1; i < POINT_COUNT; i++) {
  renderTemplate(tripEventsElem, createPointTemplate(points[i]), renderPosition.BEFOREEND);
}
