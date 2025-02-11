import { routes } from '../config';

const element = document.querySelector('main'); // Element that will be rendered inside.
const defaultRoute = 'home';

export function render(name) {
  const { page, init } = routes[name] || routes[defaultRoute];
  element.innerHTML = page;
  if (init) init();
}