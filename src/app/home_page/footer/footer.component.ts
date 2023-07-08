import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxDropzoneModule, NgxDropzoneComponent } from 'ngx-dropzone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  heroes: any[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getAllLocation')
    .subscribe(response => {
      this.heroes = response;
    })
  }
}
