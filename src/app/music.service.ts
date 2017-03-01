import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import {Artist} from './artist/artist.component';

@Injectable()
export class MusicService {

  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  getArtists(): Promise<Artist[]>{
  	return this.http.get('http://localhost:3002/getTopArtist')
  	.toPromise()
  	.then(reponse => JSON.parse(JSON.stringify(reponse || null)))
  	.catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
  	console.error('An error occured', error);
  	return Promise.reject(error.message || error);
  }

}
