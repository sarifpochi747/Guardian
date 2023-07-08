import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-images-organization',
  templateUrl: './images-organization.component.html',
  styleUrls: ['./images-organization.component.css']
})
export class ImagesOrganizationComponent {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer,private router: Router) {

  }
  images:any[] = [];
  videos: any[] = [];
  ngOnInit():void {
    //images
    this.http.get<any[]>('http://localhost:5000/getImages')
    .subscribe(response => {
      this.images = response;
    })
    //videos
    this.http.get<any[]>('http://localhost:5000/getAllNewVideos')
    .subscribe(response => {

    })
  }

  deleted(ids:Number){
    this.http.put<any[]>('http://localhost:5000/removeAllAddImages',{id: ids})
    .subscribe({
      next: data => {
          console.log('success');
          alert('Updated successfully')
          window.location.reload()
      },
      error: error => {
          console.log('failure',error);
      }
    });
  }
}
