import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../../models/imovie';

@Component({
  // Component Directives
  selector: 'app-movie-list',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  allMovies!: IMovie[];
  page!: number;
  currentPage!: BehaviorSubject<number>;
  totalPages!: number;

  constructor(private movieServ: MovieService) {
    this.currentPage = new BehaviorSubject(1);
  }
  ngOnInit(): void {
    this.currentPage.subscribe((newPage) => {
      this.movieServ.getAllMovies(newPage).subscribe((data) => {
        this.allMovies = data.results;
        this.page = data.page;
        this.totalPages = data.total_pages;
        console.log(data);
      });
    });
  }

  nextPage() {
    // if (this.page < this.totalPages) {
      this.currentPage.next(++this.page);
    // }
  }

  prevPage() {
    // if (this.page > 1) {
      this.currentPage.next(--this.page);
    // }
  }
}
