import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private service: MoviesService) { }

  id: any;

  movie: any = {}

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
      this.movie = this.service.getMovie(this.id)
    })
  }
}
