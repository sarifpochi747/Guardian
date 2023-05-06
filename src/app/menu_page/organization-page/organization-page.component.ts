import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit  {
  heroes: any[] = [];
  imtemp:any;
  files: any[] = [];
  showPrev: any[] = [];
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addGoals')
    .subscribe(response => {
      this.heroes = response;
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
      this.heroes[0]['img'] = this.files[0];
      this.http.put('http://localhost:5000/UpdateAddGoals', this.heroes[0])
        .subscribe((response) => {
          console.log('Form updated successfully:', response);
      });

      window.location.reload();
    }
  }
}
