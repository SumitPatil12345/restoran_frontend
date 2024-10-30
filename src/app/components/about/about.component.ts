import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  teamMembers = [
    {
      name: 'John Doe',
      designation: 'Head Chef',
      imageUrl: 'assets/Img/team-1.jpg',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
        { icon: 'fab fa-instagram', url: '#' }
      ]
    },
    // Repeat for other team members
  ];
}
