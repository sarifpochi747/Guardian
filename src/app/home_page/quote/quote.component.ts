import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  //getAll comment
  allComment:any[] = []
  

  constructor(private http: HttpClient) { }
  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getComment')
    .subscribe(response => {
      this.allComment = response.filter(commnet=>commnet.status == true);
    })
    
  }

  // slideShow
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:3000,
    stagePadding:50,
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


  
    



  
}
