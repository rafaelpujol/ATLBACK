import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastComponent } from './components/toast/toast.component';
import {AppToastService} from './services/toast.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from './shared/services/shared.service';


export function getToken(): any{
  return localStorage.getItem('accessToken');
}


@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   NgbModule,
   HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [
    AppToastService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
