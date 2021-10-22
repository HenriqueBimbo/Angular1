import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [

  {path: '' , redirectTo:'login' , pathMatch: 'full'} , 
  {path:  'login' , component: CardComponent} , 
  {path: 'cadastro' , component: CadastroComponent} , 

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
