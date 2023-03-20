import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);
let modalSet = ""; //Потому, что в instance другая область видимости

galleryList.insertAdjacentHTML("beforeend", itemsMarkup);
galleryList.addEventListener("click", onClickItem);

function createGalleryItems(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `       <li class = "gallery__item">
<a class = "gallery__link" href="${original}">
  <img 
  class = "gallery__image" 
  src="${preview}" 
  alt="${description}"
  data-source="${original}"
  >

</a>
</li>`
    )
    .join("");
};

function onClickItem(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  openCardModal(e.target.dataset.source);
};

function openCardModal(src) {
  const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`);
  modalSet = instance;
  modalSet.show();
  window.addEventListener("keydown", onEscKeyPress);
};

function closeCardModal() {
  modalSet.close();
  window.removeEventListener("keydown", onEscKeyPress);
};

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    closeCardModal();
  }
};
