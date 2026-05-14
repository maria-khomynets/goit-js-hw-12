import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.show({
      title: 'Warning',
      message: 'The form field must be filled in.',
      backgroundColor: 'pink',
      position: 'topLeft',
      timeout: 8000,
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(searchText)
    .then(response => {
      if (response?.hits?.length) {
        createGallery(response.hits);
      } else {
        iziToast.show({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'pink',
          position: 'topLeft',
          timeout: 8000,
        });
      }

      event.target.reset();
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topLeft',
        timeout: 8000,
      });
    })
    .finally(() => {
      hideLoader();
    });
}
