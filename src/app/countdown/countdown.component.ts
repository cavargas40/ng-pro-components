import { Component, Input, EventEmitter, OnInit, Output, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init: number = null;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  public counter: number = 0;
  private countDownTimerRef: any = null;

  constructor() { }

  ngOnInit(): void {
    this.startCoundDown();
  }

  ngOnDestroy(): void {
    this.clearTimeOut();
  }

  ngOnChanges(changes): void {
    console.log(`init value updated to ${changes.init.currentValue}`);
    this.startCoundDown();
  }

  startCoundDown() {
    if (this.init && this.init > 0) {
      this.clearTimeOut();
      this.counter = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    this.countDownTimerRef = setTimeout(() => {
      this.counter--;
      this.processCountDown();
    }, 1000);
  }

  private clearTimeOut() {
    if (this.countDownTimerRef) {
      clearTimeout(this.countDownTimerRef);
    }
  }

  processCountDown() {
    this.onDecrease.emit(this.counter);
    console.log(`count is ${this.counter}`);

    if (this.counter == 0) {
      this.onComplete.emit();
      console.log(`-- counter END --`);
    } else {
      this.doCountDown();
    }
  }
}
