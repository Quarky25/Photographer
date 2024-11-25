import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICustomer } from '../model/customer.model';
import { Customer } from '../model/customer-list.model';

@Injectable({
  providedIn: 'root'
})
export class ActivatedRouteService {
customers: ICustomer[] = [];
customer: ICustomer = {} as ICustomer
index: number = 0;
  constructor(private router: ActivatedRoute, private customerService: Customer) {
    this.customers = this.customerService.getCustomer();
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      if(id !== null) {
        this.index = +id;
        this.customer = this.customers[this.index];
      }
    })
  }
getRouteParam(): ICustomer {
  return this.customers[this.index]
}
}
