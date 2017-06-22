import { Component } from '@angular/core';
import { Conversions } from '../app/Conversions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedOption: Conversions = new Conversions(1, 'millimeters to inches');
  conversions = [
     new Conversions(1, 'millimeters to inches' ),
     new Conversions(2, 'inches to millimeters ' ),
     new Conversions(3, 'kilometers to miles ' ),
     new Conversions(4, 'miles to kilometers '),
     new Conversions(5, 'kilogram to pounds '),
     new Conversions(6, 'pounds to kilogram ')
  ];

  getValue(conversionsid) {
      this.selectedOption = this.conversions.filter((item)=> item.id === conversionsid)[0];
  }
}
