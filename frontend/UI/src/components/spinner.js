const id = 'spinner';

export const spinner = `
  <div id="${id}"></div>
`;

const getSpinner = () => document.getElementById(id);

const setSpinnerVisibility = (option, visible) => {
  const element = getSpinner();
  if (element) {
    if (option) {
      if (option.place === 'bottom') element.style.bottom = '1rem';
    }
    element.style.display = visible ? 'initial' : 'none';
  }
}

export function hideSpinner() {
  setSpinnerVisibility(false);
}

export function showSpinner(option) {
  setSpinnerVisibility(option, true);
}