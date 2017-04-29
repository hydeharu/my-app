import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private title: string;
  private current_time : Date;
  private subscription: Subscription;
  
  ngOnInit(){
    let timer = TimerObservable.create(0, 1000);
    this.subscription = timer.subscribe(t => {
        this.current_time = new Date();
    });
    console.log("タイマー開始");
    
  }
  
  ngOnDestroy(){
  　this.subscription.unsubscribe();
   console.log("タイマー停止");
  }
  
  constructor(){
    this.title = 'Angular2勉強会　4/24宿題 STEP2';
    
  }
  
}
