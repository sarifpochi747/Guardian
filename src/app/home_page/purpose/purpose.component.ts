import { Component, OnInit,HostListener } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent implements OnInit  {
  heroes: any[] = [];
  imtemp:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  
  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addGoals')
    .subscribe(response => {
      this.heroes = response;
    })
  }
}
