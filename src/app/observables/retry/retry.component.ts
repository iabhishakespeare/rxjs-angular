import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {retry, tap, scan, take} from 'rxjs/operators'

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  constructor(private _http: HttpClient){}
  fetchStatus: string = 'No Data';
  data:any;
  fetching: boolean = false;
  fetchDetails(){
    let retryCount = 0;
    this.fetching = true;
    this.fetchStatus = 'Fetchin Data...'
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      retry({count: 4, delay: 4000}),
    )
    .subscribe(
      {
        next: (res) => {
            this.data = res;
            console.log(this.data[0]);
          },
        error:(err)=>{
          console.log(new Error('Network issue'));
          this.fetchStatus = 'Problem Fetching Data!';
          this.fetching = false;
        },
        complete: ()=>{
          this.fetching = false;
          this.fetchStatus = 'Data Fetched';
        }
      }
    );
  }
  ngOnInit(): void {
    
  }


}
