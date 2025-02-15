import { getRouteParams, setRoute } from '../misc/route';
import { form } from '../components/form';
import { message, showMessage, hideMessage } from '../components/message';
import { initModal, modal, showModal } from '../components/modal';
import { logo, initLogo } from '../components/logo';
import { spinner, hideSpinner, showSpinner } from '../components/spinner';
import { dataGrid, renderDataGrid } from '../components/datagrid';
import { fetchSearchPhotos } from '../misc/fetch';

export const searchPage = `
  <header>
    <a href="#home">${logo}</a>
    <nav>${form}</nav>
  </header>
  <article>
    ${message}${modal}${spinner}${dataGrid}
  </article>
`;

export async function initSearchPage() {
  initLogo({ width: 90 });
  initModal();

  const elementForm = document.querySelector('form');
  const elementInput = elementForm.querySelector('input[type="text"]');
  const elementDataGrid = document.getElementById('datagrid');

  elementInput.focus();

  const textSearch = getRouteParams()?.textSearch;
  let nextPage = 2;
  let isLoading = false; // Track if a request is in progress
  let maxLoaded = false; // Track if all photos are loaded

  try {
    hideMessage();
    showSpinner();

    const data = await fetchSearchPhotos(textSearch);
    const total = data?.photos?.total;
    const stat = data?.stat;
    const isEmptySearchTerm = data?.errors?.searchText;

    if (stat === 'ok') {
      if (total > 0) {
        renderDataGrid({ data: data.photos.photo });
      } else if (total === 0) {
        showMessage('No photos found. Please try a different search term!');
      }
    } else if (isEmptySearchTerm) {
      showMessage('Search term cannot be empty. Please enter something to search for!');
    } else {
      showMessage('Something went wrong. Please try again!');
    }

  } catch (error) {
    hideSpinner();
    showMessage(error.message);
  } finally {
    hideSpinner();
  }

  elementForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setRoute('search', { textSearch: elementInput.value ?? '' });
  });

  elementDataGrid.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.dataset?.id) {
      showModal(event.target.dataset);
    }
  });

  elementDataGrid.addEventListener('scroll', async (event) => {
    const scrollHeight = event.target.scrollHeight;
    const scrollTop = event.target.scrollTop;
    const offsetHeight = event.target.offsetHeight;

    console.debug('OffsetHeight: ' + offsetHeight * nextPage);
    console.debug('ScrollTop: ' + scrollTop);
    console.debug('ScrollHeight: ' + scrollHeight);

    // Trigger when near the bottom and stop when there is no photos
    if ((!isLoading && !maxLoaded) && ((offsetHeight + offsetHeight) + scrollTop) >= scrollHeight) {
      try {
        showSpinner({ place: 'bottom' });
        console.debug('Current Page: ' + nextPage);
        isLoading = true;

        const data = await fetchSearchPhotos(textSearch, nextPage);
        const total = data?.photos?.photo?.length;
        const stat = data?.stat;

        if (stat === 'ok' && total > 0) {
          renderDataGrid({ data: data.photos.photo });
          nextPage++;
        } else if (total === 0) {
          maxLoaded = true;
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        isLoading = false;
        hideSpinner();
      }
    }
  });
};