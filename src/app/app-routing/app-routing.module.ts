import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MusicMainComponent} from '../music-main/music-main.component';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../app.component';

const routes: Routes = [
	{path: '', redirectTo: '/music-main', pathMatch: 'full'},
	{path: 'music-main', component: MusicMainComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
