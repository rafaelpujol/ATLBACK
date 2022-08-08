import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        LoadingComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    LoadingComponent
  ]

})
export class SharedModule { }
