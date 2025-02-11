const id = 'message';

export const message = `
  <div id="${id}"></div>
`;

const getMessage = () => document.getElementById(id)

export function showMessage (message) {
  getMessage().style.display = 'inherit';
  if (message) getMessage().innerHTML = message;
}

export function hideMessage () {
  getMessage().style.display = 'hide';
}