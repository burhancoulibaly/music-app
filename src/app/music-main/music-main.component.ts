import { Component, OnInit, HostListener } from '@angular/core';
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
  artistslist: Artist[] = [];
  w: number;
  h: number;
  picnum: number;
  prevPicNum: number = 0;
  count: number = 0;
  i: number = 0;
  startI:number = 0;

  @HostListener('window:resize')
  onResize(){
    this.getArtistCallback();
  }

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
        this.getArtistCallback();   
  	});
  }

  getArtistCallback(){
    console.log("gACprev1: "+this.prevPicNum)
    console.log("gACi1: "+this.i);
    this.artistslist = [];
    this.w = window.innerWidth;
    this.picnum = Math.floor(this.w/160)-1;

    for(this.i = this.i - this.prevPicNum; this.i < this.count + (this.picnum); this.i++){
      if(this.artists[this.i].thumb != null){
        this.artistslist.push(this.artists[this.i]);
      }
    }
    this.prevPicNum = this.picnum;
    this.startI = this.prevPicNum;
    console.log(this.artistslist);
    console.log("gACi2: "+this.i);
    console.log("gACprev2: "+this.prevPicNum)
  }

  updateCarousel(){
    this.artistslist = [];
    console.log("uCi1: "+this.i)
    console.log("uCprev1: "+this.prevPicNum)
    for(this.i =(this.startI); this.i <  this.picnum + (this.startI); this.i++){
      if(this.artists[this.i].thumb != null){
        this.artistslist.push(this.artists[this.i]);
      }
      this.count++;
      console.log("count: "+this.count);
    }
    this.startI = this.picnum + this.startI;
    console.log(this.artistslist);
    console.log("uCi2: "+this.i)
    console.log("uCprev2: "+this.prevPicNum)
  }
  updateCarouselBack(){
    this.artistslist = [];
    console.log("uCBi1: "+this.i)
    console.log("uCBprev1: "+this.prevPicNum)
    while(this.i !=  this.picnum+this.count){
      if(this.artists[this.i].thumb != null){
        this.artistslist.push(this.artists[this.i]);
      }
      this.i--
    }
    this.startI = this.picnum + this.startI;
    console.log(this.artistslist);
    console.log("uCBi2: "+this.i)
    console.log("uCBprev2: "+this.prevPicNum)
  }



  ngOnInit() {
  	this.getArtists();
  }

}
