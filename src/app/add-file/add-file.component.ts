import { Component } from '@angular/core';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent {


  uploadFile(e:Event){
    localStorage.removeItem('files')
    const files : any[] = (e.target as any).files
    console.log(files)
    for(let file of files){
      const reader : FileReader = new FileReader()

      reader.onload = (e:ProgressEvent<FileReader>) =>{
        const result = e.target?.result;
        const existingfiles : any[] = JSON.parse(localStorage.getItem("files") || '[]') ;
        existingfiles.push(result)
        localStorage.setItem("files", JSON.stringify(existingfiles))

      }
      reader.readAsDataURL(file)
    }
  }
}
