import { Component } from '@angular/core';
import { ICustomer } from '../model/customer.model';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer-list.model';
import { ActivatedRouteService } from '../services/activated-route.service';

@Component({
  selector: 'app-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrl: './testemonials.component.css'
})
export class TestemonialsComponent {
  customers: ICustomer[] = [];
  customer: ICustomer = {} as ICustomer;
  index: number = 0;

  constructor(private router: ActivatedRouteService, private customerService: Customer) {
    this.customer = this.router.getRouteParam();
    this.customers = this.customerService.getCustomer();
  }
}
