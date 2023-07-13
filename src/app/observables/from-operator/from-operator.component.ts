import { Component, OnInit } from '@angular/core';
import { from, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit{
  constructor(private _designUtility: DesignUtilityService){}
  ngOnInit(): void {
    const names = from(['Abhishek', 'Sahil', 'Rupesh']);
    const prom = new Promise((res, reject)=>{
      res('Promise Resolved');
    });
    const str = 'Abhishek';
    names.subscribe((res)=>{
      this._designUtility.print(res, 'elContainer')
        })
    const promRxjs = from(prom);
    promRxjs.subscribe((res)=>{
      this._designUtility.print(String(res), 'elContainer2')
    })
    const strRxjs = from(str);
    strRxjs.subscribe(res=>{
      this._designUtility.print(String(res), 'elContainer3')
    })
    names.pipe(toArray()).subscribe(res=>{
      this._designUtility.print(String(res), 'elContainer4')
      console.log(res);
    })
    
  }
}
