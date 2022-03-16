import HeaderInfoView from './view/header-info-view';
import SiteMenuView from './view/site-menu-view';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import PointView from './view/point-view';
import OfferFormView from './view/offer-form-view';

import {render, renderPosition} from './render.js';
import { generatePoint } from './mock/point';


const POINT_COUNT = 5;
const points = Array.from({length: POINT_COUNT}, generatePoint);

const tripBody = document.querySelector('.page-body');
const headerMenu = tripBody.querySelector('.trip-main');
const siteMenuElement = tripBody.querySelector('.trip-controls__navigation');
const filtersElement = tripBody.querySelector('.trip-controls__filters');
const tripEventsElem = tripBody.querySelector('.trip-events');


render(headerMenu, new HeaderInfoView(points[0]).element, renderPosition.AFTERBEGIN);
render(siteMenuElement, new SiteMenuView().element, renderPosition.BEFOREEND);
render(filtersElement, new FilterView().element, renderPosition.BEFOREEND);
render(tripEventsElem, new SortView().element, renderPosition.BEFOREEND);

render(tripEventsElem, new OfferFormView(points[0]).element, renderPosition.BEFOREEND);
for (let i = 1; i < POINT_COUNT; i++) {
  render(tripEventsElem, new PointView(points[i]).element, renderPosition.BEFOREEND);
}
