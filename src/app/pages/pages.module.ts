import { NgModule } from '@angular/core';
import { PagesRoutingModule} from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfigurationComponent} from '../pages/components/configuration/configuration.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PagesComponent,
    ConfigurationComponent
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ]

})
export class PagesModule {}
