import { ICustomer } from './customer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  customer: ICustomer[] = [
    {
      fName: 'Mary',
      lName: 'Doe',
      testemonial:
        'This product exceeded my expectations! I will definitely be back for more.',
      imageUrl: './images/customers/marydoe.jpg',
      rating: 5,
    },
    {
      fName: 'Emily',
      lName: 'Johnson',
      testemonial:
        'The quality is okay, but I expected more based on the price.',
      imageUrl: './images/customers/emilyjohnson.jpg',
      rating: 3,
    },
    {
      fName: 'Sarah',
      lName: 'Davis',
      testemonial: 'Terrible experience. I will not be returning.',
      imageUrl: './images/customers/sarahdavis.jpg',
      rating: 0,
    },
    {
      fName: 'Michael',
      lName: 'Brown',
      testemonial:
        'Not satisfied with my purchase. I had issues with delivery.',
      imageUrl: './images/customers/michaelbrown.jpg',
      rating: 2,
    },
    {
      fName: 'Jane',
      lName: 'Smith',
      testemonial: 'Great service and friendly staff. Highly recommend!',
      imageUrl: './images/customers/janesmith.jpg',
      rating: 4,
    },
  ];
  getCustomer(): ICustomer[] {
    return this.customer;
  }
}
