import { Component, OnInit } from '@angular/core';
import {from,map, filter, tap} from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit{
  myColor:string
  userData: { name: string, gender: string, company: string }[] = [
    { name: 'John', gender: 'Male', company: 'Acme Corp' },
    { name: 'Emily', gender: 'Female', company: 'XYZ Corporation' },
    { name: 'Michael', gender: 'Male', company: 'ABC Industries' },
    { name: 'Sophia', gender: 'Female', company: 'Tech Solutions' },
    { name: 'Daniel', gender: 'Male', company: 'Global Ventures' },
    { name: 'Olivia', gender: 'Female', company: 'Innovate Inc' },
    { name: 'David', gender: 'Male', company: 'Future Enterprises' },
    { name: 'Emma', gender: 'Female', company: 'Data Systems' },
    { name: 'William', gender: 'Male', company: 'Tech Innovators' },
    { name: 'Ava', gender: 'Female', company: 'Creative Solutions' }
  ];
  colors: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'brown',
    'gray'
  ];
  constructor(private _designUtility: DesignUtilityService){}
  ngOnInit(): void {
    let count = 1;
    const obs = from(this.userData);
    obs.pipe(map(x=>x), tap(x=>console.log(x)), filter(x=>x.name.length>5), map(x=>x)).subscribe({
      next: (res)=>{
          console.log(res);
      }
    })

    const obsColors = from(this.colors);
    
    obsColors.pipe(tap((res)=>
    {
      setTimeout(()=>{
        this.myColor = res;
      }, count*1000)
    })).subscribe((res)=>{
      setTimeout(()=>{
        console.log(res);
        this._designUtility.print(res, 'elContainer')
      }, count*1000);
      count++
    })
  }
}
