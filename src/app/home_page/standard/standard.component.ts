import { Component, OnInit,HostListener  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
  heroes: any[] = [];
  imtemp:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addStandard')
    .subscribe(response => {
      this.heroes = response;
      console.log(this.heroes);

    })
  }
  

  // slideShow
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:false,
    autoplayTimeout:1000,
    dots: false,
    navSpeed: 1000,
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
      900: {
        items: 4
      },

    },
    nav: false
  }


@HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    if(window.innerWidth >= 769) {
      this.customOptions.autoplay = false; // stop autoplay
      this.customOptions.stagePadding = 0; // set stage padding to 0
    } else {
      this.customOptions.autoplay = true; // start autoplay
      this.customOptions.stagePadding = 50; // set stage padding to 50
    }
  }
}







