import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router' ;

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms' ;


import { AppComponent } from './app.component';
import { CountwordComponent } from './countword/countword.component';



@NgModule({
  declarations: [
    AppComponent,
    CountwordComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'countwords/:texte', component: CountwordComponent },
      
    ])
    ],
    providers :[FormBuilder ],
    bootstrap: [AppComponent]
})
export class AppModule { }
