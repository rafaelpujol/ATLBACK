import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {NgxPhotoEditorModule} from 'ngx-photo-editor';
import {SharedModule} from '../../../shared/shared.module';
import {ContactComponent} from './contact.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactRoutingModule} from './contact-routing.module';

@NgModule({
  declarations: [
   ContactComponent,
   ContactListComponent,
   ContactFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    ContactRoutingModule
  ]

})
export class ContactModule {}
