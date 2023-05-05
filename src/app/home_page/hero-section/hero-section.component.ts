import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit  {
  heroes: Hero[] = [];
  imtemp:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<Hero[]>('http://localhost:5000/addProfiles')
    .subscribe(response => {
      this.heroes = response;
      for (let hero of this.heroes) {
        this.imtemp = hero.Images;
        hero.Images = "data:image/jpg;base64," + this.imtemp;
      }
    })
  }
}
