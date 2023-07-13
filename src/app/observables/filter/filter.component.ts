import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  userData: { name: string, gender: string, company: string }[] = [
    { name: 'John', gender: 'Male', company: 'Acme Corp' },
    { name: 'Emily', gender: 'Female', company: 'XYZ Corporation' },
    { name: 'Michael', gender: 'Male', company: 'ABC Industries' },
    { name: 'Sophia', gender: 'Female', company: 'Tech Solutions' },
    { name: 'Daniel', gender: 'Male', company: 'Global Ventures' },
    { name: 'Olivia', gender: 'Female', company: 'Innovate Inc' },
    { name: 'David', gender: 'Male', company: 'Future Enterprises' },
    { name: 'Emma', gender: 'Female', company: 'Data Systems' },
    { name: 'William', gender: 'Male', company: 'Tech Innovators' },
    { name: 'Ava', gender: 'Female', company: 'Creative Solutions' }
  ];
  userRes: { name: string, gender: string, company: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    const tData = document.getElementById('tContainer');
    const userStream = from(this.userData);
    userStream.pipe(filter(x => x.name.length > 6)).subscribe({
      next: (res) => {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td')
        td1.innerText = res.name;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = res.gender;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = res.company;
        tr.appendChild(td3);

        tData?.appendChild(tr);
      }
    });
  }
}
