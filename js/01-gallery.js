import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


function createGalleryItems (items) {
    return items.map(({preview, original, description}) =>
` <li class = ".gallery__item">
        <a><img class = ".gallery__image" src="${preview}" alt="${description}">
    </li>`
    ) 
}