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
  count: number = 0;
  index:number = 0;
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
    this.artistslist = [];
    this.w = window.innerWidth;
    this.picnum = Math.floor(this.w/160)-1;
    for(var i = 0 - this.prevPicNum; i < i + this.picnum; i++){
      if(this.artists[i].thumb != null){
        this.artistslist.push(this.artists[i]);
      }else{ 
        continue;
      }
    }
    this.index = i;
    this.prevPicNum = this.picnum;
    console.log("picnum: "+this.picnum);
    console.log("prevPicNum: "+this.prevPicNum);
    console.log(this.artistslist);
  }

  updateCarousel(){
    console.log("uCi1: "+i);
    console.log("prevPicNum: "+this.prevPicNum);
    console.log("uCprev1: "+(this.prevPicNum+this.prevPicNum));
    this.artistslist = [];
    for(var i  = this.index; i <  this.index + this.picnum; i++){
      if(this.artists[i].thumb != null){
        this.artistslist.push(this.artists[i]);
      }else{ 
        continue;
      }
    }
    this.index = i;
    console.log("prevPicNum: "+this.prevPicNum)
    console.log(this.artistslist);
  }

  updateCarouselBack(){
    console.log("prevPicNum: "+this.prevPicNum);
    console.log("uCBi1: "+(this.count - this.prevPicNum));
    console.log("uCBprev1: "+(this.prevPicNum+this.prevPicNum)); 
    this.artistslist = [];   
    for(var i  = this.index - (this.prevPicNum * 2); i < this.index - this.prevPicNum; i++){
      if(this.artists[i].thumb != null){
        this.artistslist.push(this.artists[i]);
      }else{ 
        continue;
      }
    }
    this.index = i - this.prevPicNum;
    console.log("prevPicNum: "+this.prevPicNum)
    console.log(this.artistslist);
  }
  
  ngOnInit() {
  	this.getArtists();
  }

}
