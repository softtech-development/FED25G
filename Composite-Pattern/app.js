import { MenuGroup } from './menu-group.js';
import { MenuItem } from './menu-item.js';
import { MenuComponent } from './menu-component.js';

const initApp = () => {
  //   Detta kommer inte att fungera...
  //   const menuComponent = new MenuComponent('Westcoast Cars');

  const mainMenu = new MenuGroup('Main menu');
  mainMenu.add(new MenuItem('Start', '/', true));

  const vehiclesDropdown = new MenuGroup('Våra bilar');
  vehiclesDropdown.add(new MenuItem('Nya bilar', '/vehicles/new'));
  vehiclesDropdown.add(new MenuItem('Begagnade bilar', '/vehicles/used'));

  const servicesDropdown = new MenuGroup('Verkstad');
  servicesDropdown.add(new MenuItem('Boka service', '/services/book'));
  servicesDropdown.add(new MenuItem('Reservdelar', '/services/spare'));

  // Add dropdowns to main menu
  mainMenu.add(vehiclesDropdown);
  mainMenu.add(servicesDropdown);
  mainMenu.add(new MenuItem('Om oss', '/about'));
  mainMenu.add(new MenuItem('Kontakta oss', '/contact'));

  mainMenu.listItems();
};

document.addEventListener('DOMContentLoaded', initApp);
