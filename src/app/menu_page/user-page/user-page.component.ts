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
  constructor(private http: HttpClient) { }



  onTableDataChange(event : any)
  {
    this.page = event
  }

  //getAll comment
  allComment:any[] = []

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addComment')
    .subscribe(response => {
      this.allComment = response;
    })
  }
}
