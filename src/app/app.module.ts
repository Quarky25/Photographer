import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

import { TestemonialsComponent } from './testemonials/testemonials.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    

    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CarouselModule,TestemonialsComponent,StarRatingComponent,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
