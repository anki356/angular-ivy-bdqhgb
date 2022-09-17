import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  products = [
    {
      name: 'Apple 1',
    },
    {
      name: 'Apple 2',
    },
    {
      name: 'Apple 3',
    },
  ];

}
