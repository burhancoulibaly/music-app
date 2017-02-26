import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { Top10ArtistComponent } from './top-10-artist/top-10-artist.component';
import { Top10AlbumsComponent } from './top-10-albums/top-10-albums.component';
import { Top10SongsComponent } from './top-10-songs/top-10-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    Top10ArtistComponent,
    Top10AlbumsComponent,
    Top10SongsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
