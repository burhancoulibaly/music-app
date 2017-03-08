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
  picnum: number;
  prevPicNum: number = 0;
  index:number = 0;
  isGreyedLeft:boolean;
  isGreyedRight:boolean;
  i:number;


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
        console.log(this.artists.length);
        this.getArtistCallback();   
  	});
  }

  getArtistCallback(){
    this.artistslist = [];
    this.w = window.innerWidth;
    this.picnum = Math.floor(this.w/160)-1;
    if(this.picnum < 1){
      this.picnum = 0;
    }
    for(this.i = this.index - (this.prevPicNum); this.i < (this.index - this.prevPicNum) + this.picnum; this.i++){
      if(this.artists[this.i] != undefined){
        this.artistslist.push(this.artists[this.i]);
      }else{ 
        this.artistslist = this.artistslist;  
        continue;
      }
    }
    this.index = this.i;
    this.prevPicNum = this.picnum;
    console.log("picnum: "+this.picnum);
    console.log("prevPicNum: "+this.prevPicNum);
    console.log(this.artistslist);
  }

  updateCarousel(){
    var count = 0;
    this.artistslist = [];
    if(this.artists[this.index] != undefined){
      for(this.i  = this.index; this.i <  this.index + this.prevPicNum; this.i++){ 
        if(this.artists[this.i] != undefined){
          this.artistslist.push(this.artists[this.i]);
          count++;
        }else{
          break;
        }
      }
    this.index = this.i;
    console.log("prevPicNum: "+this.prevPicNum)
    console.log(this.artistslist);
    }else if(this.index > 49){
      console.log(this.index - this.prevPicNum);
      for(this.i = this.index - this.prevPicNum;this.i<this.artists.length;this.i++){
          this.artistslist.push(this.artists[this.i]);
        }
        this.index = this.index - this.prevPicNum;
    }    
  }

  
  updateCarouselBack(){
    this.artistslist = [];
    if(this.artists[this.index - (this.prevPicNum * 2)] != undefined){   
      for(this.i  = this.index - (this.prevPicNum * 2); this.i < this.index - this.prevPicNum; this.i++){
        this.artistslist.push(this.artists[this.i]);
      }
      this.index = this.i;
      console.log("prevPicNum: "+this.prevPicNum)
      console.log(this.artistslist);
    }else if(this.index >= 0){
      for(this.i = 0; this.i<this.prevPicNum;this.i++){
        this.artistslist.push(this.artists[this.i]);
      }
      this.index = this.i;
    }
  }
  
  ngOnInit() {
  	this.getArtists();
  }

}
