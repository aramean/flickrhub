const id = 'heading';

export const text = `
  <h1 id="${id}"></h1>
`;

export function initText(text) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = text;
  }
}