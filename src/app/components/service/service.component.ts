import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  services = [
    { icon: 'fa-user-tie', title: 'Master Chefs', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
    { icon: 'fa-utensils', title: 'Quality Food', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
    { icon: 'fa-cart-plus', title: 'Online Order', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
    { icon: 'fa-headset', title: '24/7 Service', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' }
  ];

}
