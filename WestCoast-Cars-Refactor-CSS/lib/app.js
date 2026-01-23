const initApp = () => {
  loadVehicles();
};

const loadVehicles = async () => {
  const url = 'http://localhost:3000/vehicles';

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      generateGallery(data);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const generateGallery = (vehicles) => {
  const gallery = document.querySelector('#vehicles-gallery');
  let html = '';
  vehicles.forEach((vehicle) => {
    html += `
      <section class="card">
        <img src="${vehicle.imageUrl}" id="${vehicle.id}"/>
        <div class="card-body">
          <span>${vehicle.manufacturer} ${vehicle.model}</span>
          <span>Årsmodell: ${vehicle.modelYear}</span>
        </div>
      </section>`;
  });

  gallery.innerHTML = html;

  const images = document.querySelectorAll('.card img');
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const vehicleId = image.getAttribute('id');

    image.addEventListener('click', () => {
      console.log(`Bildens id är ${vehicleId}, bilens bildkälla är: ${src}`);
      location.href = `./vehicle-detail.html?id=${vehicleId}`;
    });
  });
};

document.addEventListener('DOMContentLoaded', initApp);
