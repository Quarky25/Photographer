import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestemonialsComponent } from './testemonials/testemonials.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AwardComponent } from './award/award.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    TestemonialsComponent,

    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    StarRatingComponent,
    AwardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestemonialsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
