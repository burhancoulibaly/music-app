import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { Top10ArtistComponent } from './top-10-artist/top-10-artist.component';
import { Top10AlbumsComponent } from './top-10-albums/top-10-albums.component';
import { Top10SongsComponent } from './top-10-songs/top-10-songs.component';
import { Artist } from './artist/artist.component';
import { MusicMainComponent } from './music-main/music-main.component';
import { MusicService } from './music.service';

@NgModule({
  declarations: [
    AppComponent,
    Top10ArtistComponent,
    Top10AlbumsComponent,
    Top10SongsComponent,
    Artist,
    MusicMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule,
    HttpModule,
    AppRoutingModule,
    
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
