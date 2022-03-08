import {createSiteMenuTemplate} from './view/site-menu-view';
import {createFilterTemplate} from './view/filter-view'
import {CreateSortTemplate} from './view/sort-view';
import { createContentTemplate } from "./view/content-view";
import { createOfferForm } from "./view/offer-form-view";

import {renderTemplate, renderPosition} from './render.js'

const tripBody = document.querySelector('.page-body');
const siteMenuElement = tripBody.querySelector('.trip-controls__navigation');
const filtersElement = tripBody.querySelector('.trip-controls__filters');
const tripEventsElem = tripBody.querySelector('.trip-events');


renderTemplate(siteMenuElement, createSiteMenuTemplate(), renderPosition.BEFOREEND);
renderTemplate(filtersElement, createFilterTemplate, renderPosition.BEFOREEND);
renderTemplate(tripEventsElem, CreateSortTemplate, renderPosition.BEFOREEND);
renderTemplate(tripEventsElem, createOfferForm, renderPosition.BEFOREEND);
renderTemplate(tripEventsElem, createContentTemplate, renderPosition.BEFOREEND);
renderTemplate(tripEventsElem, createContentTemplate, renderPosition.BEFOREEND);
renderTemplate(tripEventsElem, createContentTemplate, renderPosition.BEFOREEND);
