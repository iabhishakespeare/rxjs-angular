import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
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
