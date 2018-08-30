import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioProvider } from './usuario/usuario-provider';

const ROUTES: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  //{ path: 'restrita', component: RestritaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'usuario'}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [UsuarioProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
