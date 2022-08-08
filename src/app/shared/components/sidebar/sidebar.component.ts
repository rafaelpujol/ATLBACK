import {Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import {SideMenu} from 'src/app/models/menu';
import {SharedService} from '../../services/shared.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  environmentName: string;
  active = 'top';
  menu: SideMenu[] = [
    { active: false,
      label: 'Inicio',
      icon: 'fa fa-window-maximize',
      url: '/pages/home',
     child: null
    },
    { active: false,
      label: 'Contactos',
      icon: 'fa-solid  fa-address-book',
      url: '/pages/contact',
      child: [
        {
          active: false,
          label: 'Listados',
          icon: 'fa-solid fa-list',
          url: '/pages/contact/list'
        },
        {
          active: false,
          label: 'Creación',
          icon: 'fa-solid fa-plus',
          url: '/pages/contact/create'
        }
      ]
    },
    { active: false,
      label: 'Configuracion',
      icon: 'fa-solid fa-gears',
      url: '/pages/configuration',
      child: null
    }
  ];

  constructor(public shareService: SharedService) {
    this.environmentName = environment.name;
  }

  ngOnInit(): void {}

}
