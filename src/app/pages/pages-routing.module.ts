import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import {HomeComponent} from './components/home/home.component';
import {ConfigurationComponent} from './components/configuration/configuration.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
     children: [
       { path: 'home', component: HomeComponent },
       { path: 'configuration', component: ConfigurationComponent },
       { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
       {
         path: '',
         redirectTo: '/pages/home',
         pathMatch: 'full'
       },
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
