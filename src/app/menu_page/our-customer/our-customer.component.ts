import { Component,OnInit, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-our-customer',
  templateUrl: './our-customer.component.html',
  styleUrls: ['./our-customer.component.css']
})
export class OurCustomerComponent  implements OnInit {

  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

 

   //get All Customer
  allCustomer:any[] = [];
  countOfCustomer:number[] = [];
  idCustomerArray:number[] = [];

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getCustomerAll')
    .subscribe(response => {
      this.allCustomer = response
      for(let i=0;i<this.allCustomer.length;i++)
      {
        this.idCustomerArray.push(this.allCustomer[i].idcustomer)
        this.countOfCustomer.push(i);
      }
    })
    
  }



  addElement():void{
    this.countOfCustomer.push(this.countOfCustomer.length);
    this.idCustomerArray.push(-1);
  }
  

  

  updateForm() {
    console.log(this.allCustomer[0])
    console.log(this.allCustomer[0].title)
    this.http.put('http://localhost:5000/updateCustomer',this.allCustomer)
        .subscribe((response) => {
          console.log('Form updated successfully:', response);
      });
      alert('Form updated successfully')
  }




}
