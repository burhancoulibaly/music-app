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

  ngOnInit() {
    this.getArtists();
  }

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
      }
    }
    this.index = this.i;
    this.prevPicNum = this.picnum;
    if(this.i >= this.artists.length - 1){
      this.isGreyedRight = true;
      this.isGreyedLeft = false;
    }else if(this.index - this.prevPicNum == 0){
      this.isGreyedRight = false;
      this.isGreyedLeft = true;
    }else{
      this.isGreyedRight = false;
      this.isGreyedLeft = false;
    }
    console.log("picnum: "+this.picnum);
    console.log("prevPicNum: "+this.prevPicNum);
    console.log(this.artistslist);
    console.log(this.index - (this.prevPicNum));
  }

  updateCarousel(){
    var count = 0;
    this.artistslist = [];
    for(this.i  = this.index; this.i <  this.index + this.prevPicNum; this.i++){ 
      if(this.artists[this.i] != undefined){
        this.artistslist.push(this.artists[this.i]);
        count++;
      }
    }
    this.index = this.i;
    if(this.i >= this.artists.length - 1){
      this.isGreyedRight = true;
      this.isGreyedLeft = false;
    }else if(this.index - this.prevPicNum == 0){
      this.isGreyedRight = false;
      this.isGreyedLeft = true;
    }else{
      this.isGreyedRight = false;
      this.isGreyedLeft = false;
    }
    console.log("prevPicNum: "+this.prevPicNum)
    console.log(this.artistslist);
  }   
  

  
  updateCarouselBack(){
    this.artistslist = [];
    if(this.artists[this.index - (this.prevPicNum * 2)] != undefined){   
      for(this.i  = this.index - (this.prevPicNum * 2); this.i < this.index - this.prevPicNum; this.i++){
        this.artistslist.push(this.artists[this.i]);
      }
      this.index = this.i;
      if(this.i >= this.artists.length - 1){
        this.isGreyedRight = true;
        this.isGreyedLeft = false;
      }else if(this.index - this.prevPicNum == 0){
        this.isGreyedRight = false;
        this.isGreyedLeft = true;
      }else{
        this.isGreyedRight = false;
        this.isGreyedLeft = false;
      }
      console.log("prevPicNum: "+this.prevPicNum)
      console.log(this.artistslist);
    }
  }
}
