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
  heroes: any[] = [];
  imtemp:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addProfiles')
    .subscribe(response => {
      this.heroes = response;
      // for (let hero of this.heroes) {
      //   for(let i=1; i<=7;i++){
      //     const fieldname = `img${i}`;
      //     this.imtemp = hero[fieldname];
      //     hero[fieldname] = this.imtemp;
      //   }
      // }
    })
  }
}
