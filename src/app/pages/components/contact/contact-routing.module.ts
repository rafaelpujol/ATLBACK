import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactComponent} from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'list',
    component: ContactListComponent
  },
  {
    path: 'create',
    component: ContactFormComponent
  },
  {
    path: 'edit/:id',
    component: ContactFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
