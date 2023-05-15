import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit  {
  heroes: any[] = [];
  imtemp:any;
  fetchedText: string = "";
  sanitizedText!: SafeHtml;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addProfiles')
    .subscribe(response => {
      this.heroes = response;
      this.fetchedText = this.heroes[0].descript;
      this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.fetchedText);
    })
  }
}
