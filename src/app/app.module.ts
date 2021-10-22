import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    
    CardComponent,
    CadastroComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
