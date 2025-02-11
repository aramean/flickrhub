import { render } from './render';

export function handleRoute() {
  const [hash] = currentRoute();
  const queryParams = getRouteParams();

  console.debug('Hash:', hash);
  console.debug('Parameters:', queryParams);

  setRoute(hash, queryParams);
}

export function setRoute(hash, params) {
  const queryString = new URLSearchParams(params).toString();
  const newUrl = `#${hash}?${queryString}`;

  if (window.location.hash !== newUrl) {
    window.history.pushState({ hash, params }, '', newUrl);
  }

  render(hash);
}

export function getRouteParams() {
  const [hash, queryString] = currentRoute();
  const queryParams = Object.fromEntries(new URLSearchParams(queryString));
  return (queryParams);
}

const currentRoute = () => window.location.hash.slice(1).split('?');