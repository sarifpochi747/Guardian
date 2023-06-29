import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit  {
  heroes: any[] = [];
  numbers: number[] = [];
  img:any[] = [];
  imtemp:any;
  fetchedText: string = "";
  sanitizedText!: SafeHtml;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    for (let i = 1; i <= 7; i++) {
      this.numbers.push(i);
    }
   }
  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addProfiles')
    .subscribe(response => {
      this.heroes = response;
      this.fetchedText = this.heroes[0].descript;
      this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.fetchedText);
      this.img = [
        {imgs: this.heroes[0].img1},
        {imgs: this.heroes[0].img2},
        {imgs: this.heroes[0].img3},
        {imgs: this.heroes[0].img4},
        {imgs: this.heroes[0].img5},
        {imgs: this.heroes[0].img6},
        {imgs: this.heroes[0].img7}
      ]
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
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

}
