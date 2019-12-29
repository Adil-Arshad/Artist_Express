import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

export enum SearchType{
  all='',
  album='album',
  artist='artist',
  playlist='playlist'
}

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  url="https://api.spotify.com/v1/search";
  apiKey='BQCxvefzY2smr-a7vtPBfvs7Ntq1ALqLKBcmDnQOkDx4vnsYyET2F6Kwt7EjhG4mvwB34kFfdy_3fsNnfDMXnQrkS0jiu8JUJyHwudDPkvYY24rxaQbyFBNuTKfY5oF2DJ9Nj_PPYTk8oJ4SBeMAKavYEdndAg0';

  constructor(private http: HttpClient) { }

  searchData(title:string, type: string):Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    .pipe(
   map(results=>{
     console.log('RAW: ', results);
     return results['Search'];
   })
  );
  }

}
