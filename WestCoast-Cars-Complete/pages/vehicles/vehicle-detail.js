import HttpClient from '../../lib/http-client.js';
import { createDetailsHtml } from '../../lib/dom.js';

const detailsArea = document.querySelector('#details-area');

const initApp = () => {
  const vehicleId = location.search.split('=')[1];
  getVehicle(vehicleId);
};

const getVehicle = async (id) => {
  const http = new HttpClient();
  const vehicle = await http.findData(`vehicles/${id}`);
  detailsArea.innerHTML = createDetailsHtml(vehicle);
};

document.addEventListener('DOMContentLoaded', initApp);
