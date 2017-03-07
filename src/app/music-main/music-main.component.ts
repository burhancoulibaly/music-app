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
  isGreyedLeft:boolean;
  isGreyedRight:boolean;


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
    if(this.count - this.prevPicNum <= 0){
      this.isGreyedRight = false;
      this.isGreyedLeft = true;
    }else if(this.count + this.prevPicNum >= this.artists.length-1){
      this.isGreyedLeft = false;
      this.isGreyedRight = true;
    }else{
      this.isGreyedRight = false;
      this.isGreyedLeft = false;
    }
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
    console.log(this.artistslist);
  }

  updateCarousel(){
    if(this.count + this.prevPicNum >= this.artists.length-1){
      this.isGreyedRight = true;
      this.isGreyedLeft = false;
    }else if(this.count - this.prevPicNum <= 0){
      this.isGreyedLeft = true;
      this.isGreyedRight = false;
    }
    else{
      this.isGreyedLeft = false;
      this.isGreyedRight = false;
    }
    this.artistslist = [];
    console.log("uCi1: "+this.i);
    console.log("uCprev1: "+this.prevPicNum);
    this.count = this.count + this.prevPicNum;
    console.log("count: "+this.count);
    for(this.i = this.count; this.i <  this.count + this.prevPicNum; this.i++){
      if(this.artists[this.i].thumb != null){
        this.artistslist.push(this.artists[this.i]);
      }
    }
    console.log(this.artistslist);
  }

  updateCarouselBack(){
    if(this.count + this.prevPicNum >= this.artists.length-1){
      this.isGreyedRight = true;
      this.isGreyedLeft = false;
    }else if(this.count - this.prevPicNum<= 0){
      this.isGreyedLeft = true;
      this.isGreyedRight = false;
    }
    else{
      this.isGreyedLeft = false;
      this.isGreyedRight = false;
    }
    this.artistslist = [];
    console.log("uCBi1: "+(this.count - this.prevPicNum));
    console.log("uCBprev1: "+this.prevPicNum);    
    for(this.i = this.count - this.prevPicNum; this.i < this.count; this.i++){
      if(this.artists[this.i].thumb != null){
        this.artistslist.push(this.artists[this.i]);
      }else{
        continue;
      }
    }
    this.count = this.count - this.prevPicNum;
    console.log(this.artistslist);
  }
  
  ngOnInit() {
  	this.getArtists();
  }

}
