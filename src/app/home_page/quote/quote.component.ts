import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },

    },
    nav: true
  }
  data:any =[
    {
      name:"Savannah Miles",
      brandManager:"brand manager",
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
    }
    ,{
      name:"Savannah Miles",
      brandManager:"brand manager",
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
    }
    ,{
      name:"Savannah Miles",
      brandManager:"brand manager",
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
    }
    ,{
      name:"Savannah Miles",
      brandManager:"brand manager",
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
    }
    ,{
      name:"Savannah Miles",
      brandManager:"brand manager",
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
    }
  
  
  ] 



  
}
