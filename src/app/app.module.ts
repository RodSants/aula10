import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { AlunoService } from "./services/aluno.servive";
import { HttpClientModule } from "@angular/common/http";
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from "./services/cliente.service";


@NgModule({
  declarations: [
    AppComponent,
    ListaAlunosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlunoService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
