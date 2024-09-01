import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detils',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './movie-detils.component.html',
  styleUrl: './movie-detils.component.css',
})
export class MovieDetilsComponent implements OnInit {
  movieData: any;
  id!: number;

  constructor(private movieServ: MovieService, private route: ActivatedRoute) {
    // console.log('component created');
  }
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'))
     this.movieServ.getMovieById(this.id).subscribe((data)=>{
      this.movieData=data;
     })
  }
}
