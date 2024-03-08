import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements AfterViewInit{
  @Input() tag!: string ;
  @Input() interval: number = 5000 ;
  @Input() srcList: any[] = [];

  private length : number = 100;
  public nextIndex : number = 0;


  constructor(){
   
  }
  ngAfterViewInit(): void {
    console.log(this.interval)
    this.length = this.srcList.length*100
    setInterval(()=>{
      this.nextIndex = (this.nextIndex+1)%(this.length/100)
      console.log(this.nextIndex)
      if(this.length<=1) return;
      const elements:any = document.getElementsByClassName(`imageClass${this.tag}`) 

      for(let i = 0; i<elements.length; i++){
        const element = elements[i]
          const opacity = parseInt(element.style.opacity)
        if(i!=this.nextIndex && opacity==1){
          element.style.opacity = '0'
          element.style.transform = 'scale(0.8)'
        }
        else if(this.nextIndex==i){
          element.style.opacity = '1'
          element.style.transform = 'scale(1)'
        }

      }

    }, this.interval)
  }

}
