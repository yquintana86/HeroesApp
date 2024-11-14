import { NgModule } from '@angular/core';
import { Error404Component } from './pages/error404-page/error404-page.component';

@NgModule({
  declarations: [
    Error404Component
  ],
  exports:[
    Error404Component
  ]
})
export class SharedModule { }
