import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-obervable',
  templateUrl: './custom-obervable.component.html',
  styleUrls: ['./custom-obervable.component.scss'],
})
export class CustomObervableComponent implements OnInit, OnDestroy, AfterViewInit{
  techStatus: string = '';
  techArray: string[]=['HTML', 'CSS', 'javaScript', 'jQuery'];
  mySub: Subscription;
  names: string[] = ['Abhishek', 'Sahil', 'Rupesh'];
  namesSub: Subscription;
  currentName: string;
  constructor(private _designUtility: DesignUtilityService){}
ngOnInit(): void {
  let count = 0;
  const custObs = new Observable((observer: Observer<string>)=>{
    setTimeout(() => {
      observer.next('HTML');
    }, 1000);
    setTimeout(() => {
      observer.next('CSS');
    }, 2000);
    setTimeout(() => {
      observer.next('javaScript');
      observer.complete();
    }, 3000);
    setTimeout(() => {
      observer.next('typeScript');
      observer.error(new Error('Error!!!!'));
    }, 4000);
  })
  custObs.subscribe({
    next: (res)=> this._designUtility.print(res, 'elContainer'),
    error: (err)=>this.techStatus = 'error',
    complete: ()=>this.techStatus = 'completed'
  });
  const custObs2 = new Observable((observer: Observer<number>)=>{
    setInterval(()=>{
      if(count>3){
        observer.complete();
      }
      observer.next(count);
      count+=1;
    }, 1000)

  });
  this.mySub = custObs2.subscribe({
    next:(res)=> this._designUtility.print(this.techArray[res], 'elContainer2'),
    complete: ()=>this.techStatus = 'completed',
    error: (err)=>this.techStatus = 'error'
  })
  
}
ngAfterViewInit(): void {
  let count = 0;
  const mainNames = document.getElementById('names')?.innerText.split('Random Names: ')[1].split(', ');
  const custObs3 = new Observable((observer: Observer<string>)=>{
    setInterval(()=>{
      if(mainNames){
        if(count>mainNames?.length-1){
          observer.complete();
        }
        if(this.names.includes(mainNames[count])){
          observer.next(mainNames[count]);
        }
        else{
          observer.next('');
        }
     }
      count++;
    }, 1000)
  });
  this.namesSub = custObs3.subscribe({
    next:(res)=>{
      this.currentName = res;
    }
  })
}
ngOnDestroy(): void {
  this.mySub.unsubscribe();
  this.namesSub.unsubscribe();
}
}
