import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-our-customer',
  templateUrl: './our-customer.component.html',
  styleUrls: ['./our-customer.component.css']
})
export class OurCustomerComponent {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  title:string = "";
  //form customer submit
  data: any = {
    title: "",
    description: "",
    customerIcon: "",
  };

  n: number[] = [0];
  files: any[] = [];
  showPrev: any[] = [];


  addElement():void{
    //add to n
    this.n.push(this.n.length);
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
  }

  onRemove(event:any,id:any) {
		this.files.splice(id, 1,null);
    this.showPrev.splice(id, 1,null);
    console.log(this.showPrev)
	}

  updateForm() {
    if(this.data.title.length > 0 && this.data.description.length > 0 &&  this.files[0] != null)
    {
      this.data.customerIcon = this.files[0];
      console.log(this.data)
      this.http.post('http://localhost:5000/createCustomer',this.data )
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