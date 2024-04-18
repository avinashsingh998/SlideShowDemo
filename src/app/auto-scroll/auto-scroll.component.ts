import { AnimationBuilder, animate, keyframes, style } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-auto-scroll',
  templateUrl: './auto-scroll.component.html',
  styleUrls: ['./auto-scroll.component.scss']
})
export class AutoScrollComponent implements AfterViewInit {
  constructor(private sanetizer : DomSanitizer, private animationBuilder: AnimationBuilder){
    this.files = JSON.parse(localStorage.getItem("files") || '[]').map((f:string)=>{
      return this.sanetizer.bypassSecurityTrustResourceUrl(f)
    })
    console.log(this.files)
  }
  ngAfterViewInit(): void {
    const elements = document.getElementsByClassName("iframeChild");

      setTimeout(()=>     {
        for(let i = 0; i<elements.length; i++){

        // const frame = (elements[i] as HTMLIFrameElement)

        // console.log(frame.contentWindow?.document.body.clientHeight,frame.contentWindow?.document.body.scrollHeight, frame.clientHeight, frame.scrollHeight)
      }
    }, 6000      )
  }

  files : any[] = []

  loaded(e:any){
    console.log(e.target.scrollHeight)
  }


  animateElement() {
    const keyframeAnimation = this.animationBuilder.build([
      animate('1s', keyframes([
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        style({ opacity: 1, transform: 'translateX(0)' }),
        style({ opacity: 0, transform: 'translateX(100%)' })
      ]))
    ]);

    const element = document.getElementById('animatedElement');
    const player = keyframeAnimation.create(element);
    player.play();
  }

}
