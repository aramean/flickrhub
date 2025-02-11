const id = 'spinner';

export const spinner = `
  <div id="${id}"></div>
`;

const getSpinner = () => document.getElementById(id);

const setSpinnerVisibility = (visible) => {
  const element = getSpinner();
  if (element) {
    element.style.display = visible ? 'initial' : 'none';
  }
}

export function hideSpinner() {
  setSpinnerVisibility(false);
}

export function showSpinner() {
  setSpinnerVisibility(true);
}