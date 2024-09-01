import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchResult!: any[];
  private searchVal!: string;
  constructor(private tvServ: TvService) {}
  ngOnInit(): void {
    this.getSearchedTv('')
  }

  set searchValue(val: string) {
    this.searchVal = val;
    this.getSearchedTv(this.searchVal)
  }

  getSearchedTv(name: string) {
    this.tvServ.searchByTvName(name).subscribe((data) => {
      this.searchResult=data.results
      console.log(data.results);
      
    });
  }
}
