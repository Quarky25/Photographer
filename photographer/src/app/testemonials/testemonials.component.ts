import { Component, Input } from '@angular/core';
import { ICustomer } from '../model/customer.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../model/customer-list.model';


@Component({
  selector: 'app-testemonials',
  templateUrl: './testemonials.component.html',
  styleUrl: './testemonials.component.css'
})
export class TestemonialsComponent {
  customers: ICustomer[] = [];
  customer: ICustomer = {} as ICustomer;
  index: number = 0;
  
 

  

  constructor(private router: ActivatedRoute, private customerService: Customer) {
    this.customers = this.customerService.getCustomer();
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if(id !== null) {
        this.index = +id;
        this.customer = this.customers[this.index];
      }
    })
    
  }
  
  
}
