import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy{
  username: string = 'Abhishek';
  constructor(private _designUtility: DesignUtilityService){}
  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
    this._designUtility.username.subscribe({
      next: (res)=> this.username = res
    })
  }
  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
  }

}
