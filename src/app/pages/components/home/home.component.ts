import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const api = localStorage.getItem('usingApi');
    if (api == null || api === undefined || api === '0') {
      localStorage.setItem('usingApi', '0');
    }else {
      localStorage.setItem('usingApi', '1');
    }
  }

}
