import { setRoute } from '../misc/route';
import { form } from '../components/form';
import { logo, initLogo } from '../components/logo';
import { text, initText } from '../components/heading';

export const homePage = `
  <section>
    ${logo}
    ${text}
    ${form}
  </section>
`;

export function initHomePage() {
  initLogo({ width: 200 });
  initText('FlickrHub');

  const elementForm = document.querySelector('form');
  const elementInput = document.querySelector('form input[type="text"]');

  elementInput.focus();

  elementForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setRoute('search', { textSearch: elementInput.value ?? '' });
  });
}