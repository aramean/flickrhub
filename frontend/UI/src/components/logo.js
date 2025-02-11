import logoSrc from '../assets/images/logo.png';

const id = 'logo';

export const logo = `
  <img id="${id}">
`;

export function initLogo(props) {
  const element = document.getElementById(id);
  if (element) {
    if (props?.width) element.width = props.width;
    if (props?.height) element.height = props.height;
    element.src = logoSrc;
  }
}