import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
  providers:[]
})
export class FromComponent implements OnInit, AfterViewInit{
  count:number = 0
  @ViewChild('addBtn') addBtn: ElementRef;
  constructor(private _designUtility: DesignUtilityService){}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      let text = 'Video '+ ++this.count;
      this._designUtility.print(text, 'btnVideo');
      this._designUtility.print(text, 'btnVideo2');

    })
  }
}
