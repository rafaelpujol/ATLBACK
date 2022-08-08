import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSmall = false;
  constructor(@Inject(DOCUMENT) private document: Document,
              private modalService: NgbModal, public sharedService: SharedService) { }

  ngOnInit(): void {
  }

  SetSliderSide(): void {
    if (this.isSmall) {
      this.isSmall = false;
      this.document.body.classList.remove('mini-sidebar');
    }else {
      this.isSmall = true;
      this.document.body.classList.add('mini-sidebar');
    }
  }
  open(content): void{
    this.modalService.open(content, { size: 'sm' });
  }
}
