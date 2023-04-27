import { Component } from '@angular/core';
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
  
  data:any = [
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
                {
                  comment: "ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delic...",
                  company:"Savannah Miles",
                  brandManager:"brand manager"
                },
  ];

  onTableDataChange(event : any)
  {
    this.page = event
  }

}
