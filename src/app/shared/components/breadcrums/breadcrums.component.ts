import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {Breadcrums} from '../../models/breadcrums';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {
  currentUrl: Breadcrums[] = [];
  current: string;

  constructor(private router: Router, private  shareServices: SharedService) {

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = [];
        const url = event.url === '/' ? event.urlAfterRedirects : event.url;
        const temp =  url.split('/');
        temp.shift();
        let urlTemp = '';

        temp.forEach( (item) => {
          const bread: Breadcrums = {
            url: urlTemp + '/' + item,
            text: item
          };
          urlTemp = bread.url;
          this.currentUrl.push(bread);
        });
        this.current = this.currentUrl[this.currentUrl.length - 1].text;
        shareServices.currentUrl =  url;
      }
    });

  }

  ngOnInit(): void {
  }

}
