import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public srcList : any[] = [] 


scrabBase64(event: Event) {

  const element = event.target as HTMLInputElement
  const files : any = element.files ;
  if(files.length>0){

    let srcList: (string | ArrayBuffer)[] = []

    for(let file of files) 


   { const reader = new FileReader()

    reader.onload = (ev : ProgressEvent<FileReader>)=>{
      if(ev.target && ev.target.result) srcList.push(ev.target.result)
      localStorage.setItem("files", JSON.stringify(srcList))
    }
    reader.readAsDataURL(file)

  }}

}
  ngOnInit(): void {
    const files = localStorage.getItem("files")
    if(files) this.srcList = JSON.parse(files)
    console.log(this.srcList)
  }
  user : string = ''


}
