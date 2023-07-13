import { Component, OnInit } from '@angular/core';
import { from, pluck, map } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{
  usersArray = [
    {name: 'Abhishek', company: 'Coforge'},
    {name: 'Sahil', company: '3iInfotech'},
    {name: 'Dudu', company: 'Sunday Labs'}
  ];

  ngOnInit(): void {
    const obs = from(this.usersArray);
    obs.pipe(map(x=>x.name))
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
