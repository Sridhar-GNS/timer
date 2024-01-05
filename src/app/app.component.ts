import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TimerTool';
isStart:boolean=true;
isPause:boolean=false;
isResume:boolean=false;
isReset:boolean=true;

start(){
  this.isStart=false;
  this.isPause=true;
}

pause(){
  this.isPause=false;
  this.isResume=true;
}
resume(){
 this.isResume=false;
}

reset(){
   this.isStart=true;
}
}

