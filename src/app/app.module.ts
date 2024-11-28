import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestemonialsComponent } from './testemonials/testemonials.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AwardComponent } from './award/award.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,

    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AwardComponent,
    PortfolioComponent,
    DetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    TestemonialsComponent,
    StarRatingComponent,
    CommonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
