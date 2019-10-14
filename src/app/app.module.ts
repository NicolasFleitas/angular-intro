import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UsuariosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
