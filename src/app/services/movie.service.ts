import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/imovie';
import { MovieResponse } from '../models/IMovieResponse';
// decorator
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey = '037f872ea1c47d9d478cde261bcb9c2e';

  constructor(private http: HttpClient) {}

  getAllMovies(
    pageNumber: number = 1
  ): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${pageNumber}`
    );
  }

  getMovieById(movieId: number): Observable<any> {
    return this.http
      .get<any>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}
`);
  }

  searchByMovieName(movieName: string): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}`
    );
  }
}
