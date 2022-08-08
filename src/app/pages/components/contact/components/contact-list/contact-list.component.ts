import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../../shared/services/shared.service';
import {Contact} from '../../models/contact';
import {TypeData} from '../../models/contactNumber';
import {ContactService} from '../../services/contact.service';
import {ApiResponse} from 'src/app/models/apiresponse';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  gridData = [] as Contact[];


  constructor(private sharedService: SharedService, private  contactService: ContactService) {
    sharedService.menuTitle = 'Listado de Contacto';
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.contactService.grid().subscribe((result: ApiResponse<Contact[]>) => {
      this.gridData = result?.data || [] as Contact[];
    });
  }

  delete(id: string): void {
    if (confirm('Desea borrar este contacto?')) {
      this.contactService.delete(id).subscribe((result: ApiResponse<string>) => {
        this.getData();
      });
    }
  }
}
