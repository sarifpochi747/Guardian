import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxDropzoneModule, NgxDropzoneComponent } from 'ngx-dropzone';

@Component({
  selector: 'app-location-org',
  templateUrl: './location-org.component.html',
  styleUrls: ['./location-org.component.css']
})
export class LocationOrgComponent {
  heroes: any[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getAllLocation')
    .subscribe(response => {
      this.heroes = response;
    })
  }

  updateForm(){
    if(this.heroes[0].company == "" || this.heroes[0].lo1 == "" || this.heroes[0].lo2 == "" || this.heroes[0].tax == "" || this.heroes[0].phone == ""){
      alert('Please do not let input be empty');
    }
    else{
      this.http.put('http://localhost:5000/UpdateAllAddLocation', this.heroes[0])
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
}
