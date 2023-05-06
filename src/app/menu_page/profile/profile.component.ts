import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxDropzoneModule, NgxDropzoneComponent } from 'ngx-dropzone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  heroes: any[] = [];
  imtemp:any;
  tmpTitle:any;
  tmpDescript:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  files: any[] = [];
  showPrev: any[] = [];

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addProfiles')
    .subscribe(response => {
      this.heroes = response;
        for(let i=1; i<=7;i++){
          const fieldname:any = `img${i}`;
          this.imtemp = this.heroes[0][fieldname];
          this.files[i-1] = this.imtemp;
        }
        this.heroes[0].title = "";
        this.heroes[0].descript = "";
    })
  }


	onSelect(event: any,id:any) {
    const file = event.addedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      this.files.splice(id,1,base64String);
    };


    this.showPrev.splice(id,1,...event.addedFiles);
    console.log(this.showPrev);
  }

	onRemove(event:any,id:any) {
		this.files.splice(id, 1,null);
    this.showPrev.splice(id, 1);
	}

  updateForm() {
    if(this.heroes[0].title == "" || this.heroes[0].descript == ""){
      alert('Please Type something to your title and description');
    }
    else{
      for(let i=0; i<7; i++){
        const r = `img${i+1}`;
        this.heroes[0][r] = this.files[i];
      }

      this.http.put('http://localhost:5000/UpdateAddProfiles', this.heroes[0])
        .subscribe((response) => {
          console.log('Form updated successfully:', response);
      });

      window.location.reload();
    }
  }
}
