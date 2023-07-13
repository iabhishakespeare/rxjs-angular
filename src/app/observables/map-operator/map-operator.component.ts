import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {
  obs: Observable<string>;
  constructor(private _designUtility: DesignUtilityService){}
   ngOnInit(): void {
     this.obs = of('Abhishek', 'Sahil', 'Dudu', 'Rupesh');
     this.obs.pipe(map(x => 'Mr. '+x))
     .subscribe((res)=> this._designUtility.print(res, 'elContainer'));
    }
}
