import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit,DoCheck {

  @Input() idCustomer:number=0;
  @Input() allCustomer:any [] = [];
  @Output("updateCount") updateCount = new EventEmitter<void>()

  constructor(private http:HttpClient){}
  
  
  //form customer submit
  data: any[] = [];
  files: any[] = [];
  showPrev: any[] = [];
  index:number = this.allCustomer.length;
  
  ngOnInit():void {
    if(this.idCustomer != -1){
      this.data = this.allCustomer.filter(customer => customer.idcustomer == this.idCustomer)
      this.index = this.allCustomer.findIndex(customer=> customer.idcustomer== this.idCustomer)
      this.files[0] = this.data[0].customerIcon;
    }
  }
  
  
  ngDoCheck(): void {
    this.data[0].customerIcon = this.files[0];
    this.allCustomer[this.index] = this.data[0];
  }





  updateCountToParent(){
    this.updateCount.emit();
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


}
