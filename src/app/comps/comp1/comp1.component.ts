import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
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
