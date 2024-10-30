import { Component } from '@angular/core';


interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  activeTab = 1;

  breakfastItems: MenuItem[] = [
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-1.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-2.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-3.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-4.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-5.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-6.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-7.jpg' },
    { name: 'Chicken Burger', price: '$115', description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'assets/Img/menu-8.jpg' }
  ];

  launchItems: MenuItem[] = [
    // Add lunch items here (same structure as breakfastItems)
  ];

  dinnerItems: MenuItem[] = [
    // Add dinner items here (same structure as breakfastItems)
  ];

  setActiveTab(tab: number) {
    this.activeTab = tab;
  }
  

}
