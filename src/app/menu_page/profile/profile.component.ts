import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/hero_type';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxDropzoneModule, NgxDropzoneComponent } from 'ngx-dropzone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  heroes: any[] = [];
  imtemp:any;
  tmpTitle:any;
  tmpDescript:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  files: any[] = [];
  showPrev: any[] = [];
  imgFiles: any[] = [];
  imgNames: any[] = [];
  vidFiles: any[] = [];
  selectedFile: File | null = null;
  ngOnInit():void {
    this.http.get<any[]>('http://localhost:5000/addProfiles')
    .subscribe(response => {
      this.heroes = response;
        for(let i=1; i<=7;i++){
          const fieldname:any = `img${i}`;
          this.imtemp = this.heroes[0][fieldname];
          this.files[i-1] = this.imtemp;
        }
    })
  }

  onSelectNew(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      if(files[0].type === 'video/mp4') {
        this.selectedFile = files[0];
        this.imgNames.push(this.selectedFile.name);

      }

      if(files[0].size > 5000000 && files[0].type.startsWith('image/')){
        alert("File must not large than 5MB. size of this file is: " + files[0].size + "bytes")
      }
      else if(files[0].type === 'image/png' || files[0].type === 'image/jpeg'){
        const file = files[0];
        this.imgNames.push(file.name);
        // Convert the selected file to base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        const base64String = reader.result as string;
        this.imgFiles.push({"img":base64String})
        console.log(this.imgFiles);
      }
      };
    }
  }

  updateForm() {
    if(this.heroes[0].title == "" || this.heroes[0].descript == ""){
      alert('Please Type something to your title and description');
    }
    else{
      for(let i=0; i<7; i++){
        const r = `img${i+1}`;
        this.heroes[0][r] = this.files[i];
      }

      this.http.put('http://localhost:5000/UpdateAddProfiles', this.heroes[0])
        .subscribe((response) => {
          console.log('Form updated successfully:', response);
      });

      for(let i = 0; i < this.imgFiles.length; i++){
        this.http.post('http://localhost:5000/createAllAddImages', this.imgFiles[i])
          .subscribe((response) => {
            console.log('Form updated successfully:', response);
        });
      }

      if (this.selectedFile) {
        const formData = new FormData();
        formData.set('video', this.selectedFile);
        console.log(formData);

        this.http.post<any>('http://localhost:5000/createAllNewAddVideos', formData).subscribe(
          (response) => {
            // Handle response from the server after successful upload
            console.log('Upload successful:', response);
          },
          (error) => {
            // Handle error response from the server
            console.error('Upload error:', error);
          }
        );
      }
      alert('Form updated successfully')
    }
  }

  @ViewChild('myTextarea') myTextarea: any;
  Bold() {
    const currentValue = this.myTextarea.nativeElement.value;
    const selectionStart = this.myTextarea.nativeElement.selectionStart;
    const selectionEnd = this.myTextarea.nativeElement.selectionEnd;

    const modifiedText = "<b><strong>"+currentValue.substring(selectionStart,selectionEnd)+"</strong></b>";
    const newText = currentValue.substring(0, selectionStart) + modifiedText + currentValue.substring(selectionEnd);
    this.heroes[0].descript = newText;
  }
  Italic() {
    const currentValue = this.myTextarea.nativeElement.value;
    const selectionStart = this.myTextarea.nativeElement.selectionStart;
    const selectionEnd = this.myTextarea.nativeElement.selectionEnd;

    const modifiedText = "<i>"+currentValue.substring(selectionStart,selectionEnd)+"</i>";
    const newText = currentValue.substring(0, selectionStart) + modifiedText + currentValue.substring(selectionEnd);
    this.heroes[0].descript = newText;
  }
  Underline() {
    const currentValue = this.myTextarea.nativeElement.value;
    const selectionStart = this.myTextarea.nativeElement.selectionStart;
    const selectionEnd = this.myTextarea.nativeElement.selectionEnd;

    const modifiedText = "<u>"+currentValue.substring(selectionStart,selectionEnd)+"</u>";
    const newText = currentValue.substring(0, selectionStart) + modifiedText + currentValue.substring(selectionEnd);
    this.heroes[0].descript = newText;
  }
  Strike() {
    const currentValue = this.myTextarea.nativeElement.value;
    const selectionStart = this.myTextarea.nativeElement.selectionStart;
    const selectionEnd = this.myTextarea.nativeElement.selectionEnd;

    const modifiedText = "<strike>"+currentValue.substring(selectionStart,selectionEnd)+"</strike>";
    const newText = currentValue.substring(0, selectionStart) + modifiedText + currentValue.substring(selectionEnd);
    this.heroes[0].descript = newText;
  }
}
