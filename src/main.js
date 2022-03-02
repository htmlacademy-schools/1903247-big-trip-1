import {createSiteMenuTemplate} from './view/site-menu-view';
// import {createSortTemplate} from './view/sort-view';
import {createFilterTemplate} from './view/filter-view';
import {createContentTemplate} from './view/content-view';
import {createAddNewPoint} from './view/add-new-point-view';
import {createEditPoint} from './view/edit-point-view';

import {renderTemplate, renderPosition} from './render.js'

const headerElement = document.querySelector('.page-header');
const siteMenuElement = headerElement.querySelector('trip-controls__navigation');
// const headerElement = document.querySelector('.main__control')
const filtersElement = headerElement.querySelector('.trip-controls__filters');
const mainElement = document.querySelector('.page-main');
const mainContentElement = mainElement.querySelector('.page-body__container');
const eventsElement = document.querySelector('.trip-events__list');



renderTemplate(siteMenuElement, createSiteMenuTemplate(), renderPosition.BEFOREEND);
renderTemplate (filtersElement, createFilterTemplate(), RenderPosition.BEFOREEND);renderTemplate (mainContentElement, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate (mainContentElement, createContentTemplate(), RenderPosition.BEFOREEND);
renderTemplate (eventsElement, createEditPoint(), RenderPosition.AFTERBEGIN);
renderTemplate (eventsElement, createAddNewPoint(), RenderPosition.AFTERBEGIN);


