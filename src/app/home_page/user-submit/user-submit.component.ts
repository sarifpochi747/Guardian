import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-submit',
  templateUrl: './user-submit.component.html',
  styleUrls: ['./user-submit.component.css']
})
export class UserSubmitComponent {
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  title:string = "";
  //form user submit
  data: any = {
    userIcon: "",
    name: "",
    brandManager: "",
    comment: "",
    status: true,
  };

  

  files: any[] = [];
  showPrev: any[] = [];


  onSelect(event: any,id:any) {
    const file = event.addedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      this.files.splice(id,1,base64String);
    };

    this.showPrev.splice(id,1,...event.addedFiles);
  }

  onRemove(event:any,id:any) {
		this.files.splice(id, 1,null);
    this.showPrev.splice(id, 1,null);
    console.log(this.showPrev)
	}



  updateForm() {
    console.log(this.data.name.length)
    if(this.data.name.length > 0 && this.data.comment.length > 0 && this.data.brandManager.length > 0 &&  this.files[0] != null)
    {
      this.data.userIcon = this.files[0];
      console.log(this.data)
      this.http.post('http://localhost:5000/CreateComment',this.data )
        .subscribe((response) => {
          console.log('Form updated successfully:', response);
      });
      window.location.reload();
    }
    else
    {
      alert("input something")
    }

  }

}
