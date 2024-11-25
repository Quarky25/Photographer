import { ICustomer } from "./customer.model";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Customer {
    customer: ICustomer[] = [
        {
            fName: 'Mary',
            lName: 'Doe',
            testemonial: 'This product exceeded my expectations! I will definitely be back for more.',
            imageUrl: '',
            rating: 5
        },
        {
            fName: 'Emily',
            lName: 'Johnson',
            testemonial: 'The quality is okay, but I expected more based on the price.',
            imageUrl: '',
            rating: 3
        },
        {
            fName: 'Sarah',
            lName: 'Davis',
            testemonial: 'Terrible experience. I will not be returning.',
            imageUrl: '',
            rating: 0
        },
        {
            fName: 'Michael',
            lName: 'Brown',
            testemonial: 'Not satisfied with my purchase. I had issues with delivery.',
            imageUrl: '',
            rating: 2
        },
        {
            fName: 'Jane',
            lName: 'Smith',
            testemonial: 'Great service and friendly staff. Highly recommend!',
            imageUrl: '',
            rating: 4
        }
    ]
    getCustomer(): ICustomer[] {
        return this.customer
    }
}