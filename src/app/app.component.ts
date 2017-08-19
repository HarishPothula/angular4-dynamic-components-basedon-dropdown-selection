import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sections = ['Choose One', 'BasicInfo', 'AddressInfo']; // List of options for dropdown
  selectedSection = 'Choose One'; // To hold the selected item from the dropdown
}
