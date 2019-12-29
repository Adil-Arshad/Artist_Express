import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from '../sdk/custom/movie.service';
import {SpotifyService} from '../sdk/custom/spotify.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
   results:Observable<any>;
   searchTerm='';
   type: SearchType = SearchType.all;
 // type='artist';

  constructor(private router:Router,private movieService:MovieService,private spotifyService:SpotifyService) { }

  ngOnInit() {
  }
  searchChanged(){
    this.results=this.movieService.searchData(this.searchTerm, this.type);
  }
  logout(){
    this.router.navigateByUrl('/login');
  }

}
