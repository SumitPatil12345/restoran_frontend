import { Component } from '@angular/core';



interface TeamMember {
  name: string;
  designation: string;
  image: string;
  facebook: string;
  twitter: string;
  instagram: string;
}


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  teamMembers: TeamMember[] = [
    {
        name: 'Full Name 1',
        designation: 'Designation 1',
        image: 'assets/Img/team-1.jpg',
        facebook: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        name: 'Full Name 2',
        designation: 'Designation 2',
        image: 'assets/Img/team-2.jpg',
        facebook: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        name: 'Full Name 3',
        designation: 'Designation 3',
        image: 'assets/Img/team-3.jpg',
        facebook: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        name: 'Full Name 4',
        designation: 'Designation 4',
        image: 'assets/Img/team-4.jpg',
        facebook: '#',
        twitter: '#',
        instagram: '#'
    },
    // Add more team members as needed
];

}
