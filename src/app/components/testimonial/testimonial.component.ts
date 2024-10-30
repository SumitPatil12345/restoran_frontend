import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {


  testimonials = [
    {
      feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      clientName: 'Client Name 1',
      profession: 'Profession 1',
      image: 'assets/Img/testimonial-1.jpg'
    },
    {
      feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      clientName: 'Client Name 2',
      profession: 'Profession 2',
      image: 'assets/Img/testimonial-2.jpg'
    },
    {
      feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      clientName: 'Client Name 3',
      profession: 'Profession 3',
      image: 'assets/Img/testimonial-3.jpg'
    },
    {
      feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      clientName: 'Client Name 4',
      profession: 'Profession 4',
      image: 'assets/Img/testimonial-4.jpg'
    }
  ];

}
