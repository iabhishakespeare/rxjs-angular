import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  username: string = 'Abhishek';
  constructor(private _designUtility: DesignUtilityService){
    this._designUtility.username.subscribe((res)=>{
      this.username = res
    })
  }
  changeName(name: HTMLInputElement){
    this._designUtility.username.next(name.value);
  }
}
