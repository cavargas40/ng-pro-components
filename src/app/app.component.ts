import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counterProgress: number = 0;
  totalCountDown: number = 15;
  constructor() { }

  updateProgress($event){
    this.counterProgress = (this.totalCountDown - $event) / this.totalCountDown * 100;
  }

  countDownFinished(){
    console.log('count down has finished');
  }
}
