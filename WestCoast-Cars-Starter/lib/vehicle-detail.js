const initApp = () => {
  console.log(location.search.split('=')[1]);
  const vehicleId = location.search.split('=')[1];
  getVehicle(vehicleId);
};

const getVehicle = async (id) => {
  const url = `http://localhost:3000/vehicles/${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      createDetailsHtml(result);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

const createDetailsHtml = (vehicle) => {
  const detailsArea = document.querySelector('#details-area');
  let html = '';

  console.log(vehicle.imageUrl);
  html += `
        <a class="goback" href="./gallery.html">
            <i class="fa-regular fa-arrow-left-long"></i>Tillbaka till
        galleriet</a>
        <section class="card">
          <img src="${vehicle.imageUrl}" alt="${vehicle.model}"/>
          <p>${vehicle.manufacturer} ${vehicle.model}</p>
          <p>Pris ${vehicle.value}</p>
          <div>
            <span>Årsmodell</span>
            <span>${vehicle.modelYear}</span>
          </div>
          <div>
            <span>Antal km</span>
            <span>${vehicle.mileage}</span>
          </div>
          <h3>Beskrivning</h3>
          <div class="description">
            ${vehicle.description}
          </div>
        </section>
    `;

  console.log(html);
  detailsArea.innerHTML = html;
};

document.addEventListener('DOMContentLoaded', initApp);
