import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit{
  obsMsg: string;
  constructor(private _designUtility: DesignUtilityService){}

ngOnInit(): void {
  const ofVideo = of('Abhishek', 'Sahil', 'Rupesh')
  const ofVideo2 = of({'a': 'Abhishek', 'b': 'Sahil', 'c': 'Rupesh', d: 'Lucky'})
  ofVideo.subscribe(res=>{
    this._designUtility.print(res, 'elContainer');
  })
  ofVideo2.subscribe(res=>{
    for( let i of Object.keys(res)){
    this.obsMsg = i+ ': '+ res[i as keyof object]
    this._designUtility.print(this.obsMsg, 'elContainer2');
    }
  })
}
}
