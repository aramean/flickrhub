import { homePage, initHomePage } from './pages/home';
import { searchPage, initSearchPage } from './pages/search';

export const routes = {
  home: { page: homePage, init: initHomePage },
  search: { page: searchPage, init: initSearchPage },
};

// TODO: Make it dynamic through environment variable.
// Comment out below to activate debug.
//console.debug = function () { };