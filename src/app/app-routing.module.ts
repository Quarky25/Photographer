import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AwardComponent } from './award/award.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailsComponent } from './details/details.component';
import { LoadingComponent } from './loading/loading.component';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: 'landing', component: LoadingComponent, data: {animation: '*'}},

  {path: '', component: LayoutComponent, data: {animation: '*'},
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent, data: {animation: '*'}},
      { path: 'contact', component: ContactComponent, data: {animation: '*'} },
      { path: 'about', component: AboutComponent, data: {animation: '*'} },
      {path: 'award', component: AwardComponent, data: {animation: '*'}},
      {path: 'portfolio', component: PortfolioComponent, data: {animation: '*'}},
      {path: 'details/:id', component: DetailsComponent, data: {animation: '*'}}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableViewTransitions: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
