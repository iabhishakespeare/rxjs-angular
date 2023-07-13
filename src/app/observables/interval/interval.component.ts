import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, AfterViewInit, OnDestroy{
  obsMsg: string;
  sub: Subscription;
  constructor(private _designUtility: DesignUtilityService){}
  ngAfterViewInit(): void {
    const broadcastVideos = interval(1000);
    this.sub = broadcastVideos.subscribe((res)=>{
      console.log(res);
      this.obsMsg = 'Video '+ res;
      this._designUtility.print(this.obsMsg, 'elContainer')
      if(res>5){
        this.sub.unsubscribe();
      }
    });

  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
