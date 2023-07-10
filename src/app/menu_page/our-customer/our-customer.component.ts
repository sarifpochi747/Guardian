import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-our-customer',
  templateUrl: './our-customer.component.html',
  styleUrls: ['./our-customer.component.css']
})
export class OurCustomerComponent  implements OnInit{


  constructor(private http: HttpClient) { }


   //get All Customer
  newCustomer:any[]=[];
  allCustomer:any[] = [];
  countOfCustomer:number[] = [];
  idCustomerArray:number[] = [];
  tempAllCustomer:any[] = []

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getCustomerAll')
    .subscribe(response => {
      this.allCustomer = response
      this.tempAllCustomer = response
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



  createNewCutomer(){
     this.http.post('http://localhost:5000/createCustomer',this.newCustomer )
     .subscribe({
      next: data => {
        this.allCustomer = this.allCustomer.filter(customer => customer.idcustomer != -1);
        this.UpadateCustomer();
        // window.location.reload()
      },
      error: error => {
        console.log('failure',error);
      }
    });

  }

  UpadateCustomer(){
    //update
    this.http.put('http://localhost:5000/updateCustomer',this.allCustomer)
        .subscribe((response) => {
          console.log('Form updated successfully:', response);
      });
      alert('Form updated successfully')
  }


  //delete customer
  deleteCustomer(idcustomer:number) {
    this.http.delete<any[]>(`http://localhost:5000/deleteCustomer/${idcustomer}`)
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




  updateForm() {
    this.newCustomer = this.allCustomer.filter(customer => (customer.idcustomer == -1 && customer.title.length > 0 && customer.customerIcon.length > 0 && customer.description.length > 0));
    console.log(this.allCustomer);
    if(this.newCustomer.length > 0)
    {
      this.createNewCutomer()
    }
    else{
      this.UpadateCustomer();
    }
  }




}
