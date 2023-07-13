import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  exclusive = new Subject<boolean>();
  username = new Subject<string>();
  print(val:string, id: string){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(id)?.appendChild(el);
  }
}
