import { homePage, initHomePage } from './pages/home';
import { searchPage, initSearchPage } from './pages/search';

export const routes = {
  home: { page: homePage, init: initHomePage },
  search: { page: searchPage, init: initSearchPage },
};

// Disable debug.
//console.debug = function () { };