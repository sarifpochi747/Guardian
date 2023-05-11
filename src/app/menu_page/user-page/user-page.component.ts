import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  POST:any;
  page:number = 1;
  count:number = 0;
  tableSize :number = 4;
  status:boolean = true;
  data:any =  { 
      status:true, 
      id: 1 
  }
  
  constructor(private http: HttpClient) { }
  toggleSwitch(postId:number,status:boolean)
  {
      this.data.id = postId;
      this.data.status =  !status;
      this.http.put('http://localhost:5000/UpdateComment', this.data)
        .subscribe((response) => {
          console.log("success : ",response);
      });

  }


  onTableDataChange(event : any)
  {
    this.page = event
  }

  //getAll comment
  allComment:any[] = []

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/getComment')
    .subscribe(response => {
      this.allComment = response;
    })
  }
}
