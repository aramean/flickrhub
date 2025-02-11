const id = 'datagrid';

export const dataGrid = `
  <div id="${id}"></div>
`;

export function renderDataGrid(props) {
  const baseImgUrl = 'https://live.staticflickr.com/';
  const element = document.getElementById(id);

  if (element && props?.data) {
    props.data.forEach((item) => {
      const imageUrl = baseImgUrl + item.server + '/' + item.id + '_' + item.secret + '.jpg';
      const imageThumbUrl = baseImgUrl + item.server + '/' + item.id + '_' + item.secret + '_w.jpg';
      
      element.insertAdjacentHTML(
        'beforeend',
        '<figure>' +
        '  <img data-title="' + item.title + '" data-id="' + item.id + '" data-photo="' + imageUrl + '" src="' + imageThumbUrl + '">' +
        '  <figcaption>' + item.title + '</figcaption>' +
        '</figure>'
      );
    });
  }
}