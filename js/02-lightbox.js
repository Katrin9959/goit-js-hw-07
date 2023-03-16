import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
//  galleryContainer.addEventListener('click', onImgClick);

// rendered items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__item" 
      href="${original}">
  <img class="gallery__image"
   src="${preview}" 
   alt="${description}" />  
   </a>
</div>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
     captionsData: 'alt',
     captionsDelay: 250 ,
    });



// console.log(galleryItems);
