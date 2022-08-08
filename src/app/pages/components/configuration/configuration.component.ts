import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  usingApi = true;
  constructor() { }

  ngOnInit(): void {
    const api = localStorage.getItem('usingApi');
    if (api == null || api === undefined || api === '0') {
      localStorage.setItem('usingApi', '0');
      this.usingApi = false;
    }else {
      localStorage.setItem('usingApi', '1');
      this.usingApi = true;
    }
  }
  Change(): void{
    const api = localStorage.getItem('usingApi');
    if (api === '1' ) {
      localStorage.setItem('usingApi', '0');
    }else{
      localStorage.setItem('usingApi', '1');
    }
  }

}
