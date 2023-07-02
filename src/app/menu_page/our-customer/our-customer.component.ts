import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-our-customer',
  templateUrl: './our-customer.component.html',
  styleUrls: ['./our-customer.component.css']
})
export class OurCustomerComponent {

  n: number[] = [0];

  addElement():void{
    //add to n
    this.n.push(this.n.length);
  }
  


}
