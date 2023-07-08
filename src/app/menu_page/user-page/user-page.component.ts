import { Component,OnInit,HostListener   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  POST:any;
  page:number = 1;
  count:number = 0;
  tableSize :number = 4;
  status:boolean = true;
  //getAll comment
  allComment:any[] = []
  //check for sort

  onTableDataChange(event : any)
  {
    this.page = event
  }
  constructor(private http: HttpClient,private router:Router) { }

  handleClick(event: Event, commentId: number, status: boolean): void {
    // Check if the event has already been handled
    if (event.defaultPrevented) {
      return;
    }

    // Prevent the event from being handled again
    event.preventDefault();

    // Call toggleSwitch()
    this.toggleSwitch(commentId, status);
  }

  // update to sql when web reload
  UpdateToDatabase(){
    console.log("update to database()")
    this.http.put('http://localhost:5000/UpdateComment', this.allComment)//[{},{},{}]
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


  toggleSwitch(commentId: number, status: boolean): void {
    const commentIndex = this.allComment.findIndex(comment => comment.idcomment === commentId); // find the index of the comment with matching comment ID
    if (commentIndex > -1) { // check if commentIndex is a valid index
      this.allComment[commentIndex].status = !status; // toggle the status of the comment at the found index
    }
    console.log(this.allComment)

  }

  getAllComment(): void {

    this.http.get<any[]>('http://localhost:5000/getComment').subscribe(response => {
      this.allComment = response
      console.log(this.allComment);
    });
  }

  ngOnInit():void {
    // get all comment
    this.getAllComment()
  }

  //Final edit comment
  SubmitButton = () => {
    this.UpdateToDatabase();
    alert("Form updated successfully")
  }


  //sort comment
  sortAscendingComment:boolean = true;  // Indicates whether to sort in ascending order (A-Z)
  sortAscendingCompany:boolean = true;  // Indicates whether to sort in ascending order (A-Z)
  sortAscendingBrandManager:boolean = true;  // Indicates whether to sort in ascending order (A-Z)
  sortComment(){
    if(this.sortAscendingComment)
    {
      this.allComment.sort((a, b) => a.comment.charAt(0).localeCompare(b.comment.charAt(0),undefined, { sensitivity: 'base' }));
    }
    else
    {
      this.allComment.sort((a, b) => b.comment.charAt(0).localeCompare(a.comment.charAt(0),undefined, { sensitivity: 'base' }));
    }
    this.sortAscendingComment = !this.sortAscendingComment

  }
  //sort Company
  sortCompany(){
    if(this.sortAscendingCompany)
    {
      this.allComment.sort((a, b) => a.name.charAt(0).localeCompare(b.name.charAt(0),undefined, { sensitivity: 'base' }));
    }
    else
    {
      this.allComment.sort((a, b) => b.name.charAt(0).localeCompare(a.name.charAt(0),undefined, { sensitivity: 'base' }));
    }
    this.sortAscendingCompany= !this.sortAscendingCompany

  }

    //sort BrandManager
  sortBrandManager(){
    if(this.sortAscendingBrandManager)
    {
      this.allComment.sort((a, b) => a.brandManager.charAt(0).localeCompare(b.brandManager.charAt(0),undefined, { sensitivity: 'base' }));
    }
    else
    {
      this.allComment.sort((a, b) => b.brandManager.charAt(0).localeCompare(a.brandManager.charAt(0),undefined, { sensitivity: 'base' }));
    }
    this.sortAscendingBrandManager= !this.sortAscendingBrandManager

  }




}
