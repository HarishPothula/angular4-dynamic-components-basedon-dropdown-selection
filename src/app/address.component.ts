import {Component} from '@angular/core';

@Component({
  selector: 'address-info-component',
  templateUrl: './address.component.html'
})
export class AddressInfoComponent {
  title='Address Information';
  address= {
    street: 'ABC Street',
    houseNo: '123',
    pin: '401020'
  };

}
