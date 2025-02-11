const id = 'modal';

export const modal = `
  <div id="${id}">
    <figure>
      <button>x</button>
      <img>
      <figcaption></figcaption>
    </figure>
  </div>
`;

export function initModal() {
  const elementCloseButton = getModal().querySelector('button');

  elementCloseButton.addEventListener('click', (event) => {
    hideModal();
  });
}

const getModal = () => document.getElementById(id);

const setModalContent = (props) => {
  getModal().querySelector('figure figcaption').innerHTML = props?.title ?? '';
  getModal().querySelector('figure img').src = props?.photo ?? '';
}

const setModalVisibility = (visible) => {
  const element = getModal();
  if (element) {
    element.style.visibility = visible ? 'visible' : 'hidden';
  }
}

export function hideModal() {
  setModalVisibility(false);
  setModalContent(); // Clear content
}

export function showModal(props) {
  setModalVisibility(true);
  setModalContent(props);
}