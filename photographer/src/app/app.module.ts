import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';

@NgModule({
  declarations: [
    AppComponent,
    
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
