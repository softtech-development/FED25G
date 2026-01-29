export const generateGallery = (vehicles) => {
  let html = '';
  vehicles.forEach((vehicle) => {
    html += `
      <section class="card">
        <img src="${vehicle.imageUrl}" id="${vehicle._id}"/>
        <div class="card-body">
          <span>${vehicle.manufacturer} ${vehicle.model}</span>
          <span>Årsmodell: ${vehicle.modelYear}</span>
        </div>
      </section>`;
  });

  return html;
};

export const addClickEventHandler = (images, url) => {
  images.forEach((image) => {
    const id = image.getAttribute('id');
    image.addEventListener('click', () => {
      location.href = `${url}?id=${id}`;
    });
  });
};

export const createDetailsHtml = (vehicle) => {
  let html = '';

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

  return html;
};
