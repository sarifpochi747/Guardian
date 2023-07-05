import { Component, OnInit,HostListener  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  //get All Customer
  allCustomer:any[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getCustomer')
    .subscribe(response => {
      this.allCustomer = response
      console.log(this.allCustomer)
    })
    
  }
  
  // slideShow
  customOptions: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 6
      },

    },
    nav: false
  }

}