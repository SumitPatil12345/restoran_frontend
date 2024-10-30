import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DefaultLayoutComponent } from './common/default-layout/default-layout.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookingComponent } from './components/booking/booking.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path : "" , redirectTo : "home", pathMatch : 'full'},

  {path : "", component : DefaultLayoutComponent,
     children: [{path : "home" , component : HomeComponent},
                {path : "about" , component : AboutComponent},
                {path : "service" , component : ServiceComponent},
                {path : "menu" , component : MenuComponent},
                {path : "booking" , component : BookingComponent},
                {path : "team" , component : TeamComponent},
                {path : "testimonial" , component : TestimonialComponent},
                {path : "contact" , component : ContactComponent},

     ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
