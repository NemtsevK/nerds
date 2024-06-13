import Slider from './slider.js';
import Modal from './modal.js';
import Map from './map.js';
import { URL_MAP } from './const.js';

const sliderElement = document.querySelector('.slider');
const modalFormElement = document.querySelector('.modal-form');
const contactsButtonElement = document.querySelector('.contacts__button');
const mapId = document.querySelector('#map');

if (sliderElement) {
  new Slider(sliderElement, 'slider__list-item', 'slider-controls').init();
}

console.log('hello');

if (modalFormElement) {
  const modalForm = new Modal(modalFormElement);
  console.log('hello');
  contactsButtonElement.addEventListener('click', (event) => {
    event.preventDefault();

    modalForm.show();
  });
}

if (mapId) {
  new Map('map', URL_MAP).init();
}
