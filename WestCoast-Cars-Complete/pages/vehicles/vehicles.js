import HttpClient from '../../lib/http-client.js';
import { generateGallery, addClickEventHandler } from '../../lib/dom.js';

const gallery = document.querySelector('#vehicles-gallery');

const initApp = async () => {
  loadVehicles();
};

const loadVehicles = async () => {
  const http = new HttpClient();
  const vehicles = await http.loadData('vehicles');
  gallery.innerHTML = generateGallery(vehicles);

  const images = document.querySelectorAll('.card img');
  addClickEventHandler(images, './vehicle-detail.html');
};

document.addEventListener('DOMContentLoaded', initApp);
