import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  apiKey = '037f872ea1c47d9d478cde261bcb9c2e';
  constructor(private http: HttpClient) {}

  getAllTv(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(`
https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&page=${pageNumber}`);
  }
  getTvById(tvId: number): Observable<any> {
    return this.http
      .get<any>(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.apiKey}
`);
  }

  searchByTvName(tvName: string): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${tvName}`
    );
  }
}
