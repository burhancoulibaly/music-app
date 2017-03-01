import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import {Artist} from '../artist/artist.component';
import {MusicService} from '../music.service';

@Component({
  selector: 'music-main',
  templateUrl: './music-main.component.html',
  styleUrls: ['./music-main.component.css']
})
export class MusicMainComponent implements OnInit {
  artists: Artist[];
  constructor(
  	private musicService: MusicService,
  	private router: Router
  	) { }

  getArtists(): void{
  	this.musicService
  		.getArtists()
  		.then(artists => {
  			this.artists = artists;
  			console.log(this.artists);
  	});
  }


  ngOnInit() {
  	this.getArtists();
  }

}
