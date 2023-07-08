import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-videos-organization',
  templateUrl: './videos-organization.component.html',
  styleUrls: ['./videos-organization.component.css']
})
export class VideosOrganizationComponent {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

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
      this.videos = response;
    })
  }

  deleted(ids:Number){
    this.http.put<any[]>('http://localhost:5000/removeAllNewAddVideos',{id: ids})
    .subscribe(response => {
      console.log('Form remove successfully:', response);
    })
  }
}