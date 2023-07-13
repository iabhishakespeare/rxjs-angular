import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, debounceTime, distinctUntilChanged, map } from 'rxjs'
@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements AfterViewInit{
userData: any;
@ViewChild('keyData') keyData : ElementRef;
ngAfterViewInit(): void {
  fromEvent(this.keyData.nativeElement, 'keyup')
  .pipe(debounceTime(2000),
  map((x:any)=> x?.target.value),
  distinctUntilChanged())
  .subscribe({
    next: (res: any)=> {
      this.userData = res
      console.log(res);
    }
  })
}

}
