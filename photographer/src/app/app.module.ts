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


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    HomeComponent,
    TestemonialsComponent,
=======
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent
>>>>>>> 20470f8aaa58754cd339f681ffe861f34b184dec
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    
  
=======
    FormsModule,
    TestemonialsComponent

>>>>>>> 20470f8aaa58754cd339f681ffe861f34b184dec
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
