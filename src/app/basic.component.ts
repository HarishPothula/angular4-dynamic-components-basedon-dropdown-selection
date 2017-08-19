import {Component} from '@angular/core';

@Component({
  selector: 'basic-info-component',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  title= 'Basic Information';
  firstName = 'John';
  lastName = 'Doe';
  dob = '1994-01-01'
}
