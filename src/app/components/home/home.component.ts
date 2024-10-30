import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';




interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations : [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class HomeComponent {

// reservation start

  reservation = {
    name: '',
    email: '',
    datetime: '',
    people: '1',
    specialRequest: ''
  };

  videoSrc: any;

  onSubmit() {
    // Handle form submission
    console.log(this.reservation);
  }

  openVideoModal(src: string) {
    this.videoSrc = src;
    // Logic to open modal
  }

  closeVideoModal() {
    this.videoSrc = '';
    // Logic to close modal
  }



  // Team start


  teamMembers = [
    {
      name: 'John Doe',
      designation: 'Head Chef',
      image: 'assets/Img/team-1.jpg',
      socials: [
        { platform: 'facebook', link: '#', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', link: '#', icon: 'fab fa-twitter' },
        { platform: 'instagram', link: '#', icon: 'fab fa-instagram' }
      ]
    },
    {
      name: 'Jane Smith',
      designation: 'Sous Chef',
      image: 'assets/Img/team-2.jpg',
      socials: [
        { platform: 'facebook', link: '#', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', link: '#', icon: 'fab fa-twitter' },
        { platform: 'instagram', link: '#', icon: 'fab fa-instagram' }
      ]
    },
    {
      name: 'Emily Johnson',
      designation: 'Pastry Chef',
      image: 'assets/Img/team-3.jpg',
      socials: [
        { platform: 'facebook', link: '#', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', link: '#', icon: 'fab fa-twitter' },
        { platform: 'instagram', link: '#', icon: 'fab fa-instagram' }
      ]
    },
    {
      name: 'Michael Brown',
      designation: 'Grill Master',
      image: 'assets/Img/team-4.jpg',
      socials: [
        { platform: 'facebook', link: '#', icon: 'fab fa-facebook-f' },
        { platform: 'twitter', link: '#', icon: 'fab fa-twitter' },
        { platform: 'instagram', link: '#', icon: 'fab fa-instagram' }
      ]
    }
  ];



  // testimonials start

  testimonials = [
    {
      message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      clientName: 'Client Name 1',
      profession: 'Profession 1',
      image: 'assets/Img/testimonial-1.jpg'
    },
    {
      message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      clientName: 'Client Name 2',
      profession: 'Profession 2',
      image: 'assets/Img/testimonial-2.jpg'
    },
    {
      message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      clientName: 'Client Name 3',
      profession: 'Profession 3',
      image: 'assets/Img/testimonial-3.jpg'
    },
    {
      message: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      clientName: 'Client Name 4',
      profession: 'Profession 4',
      image: 'assets/Img/testimonial-4.jpg'
    }
  ];


  //  menu start

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
