import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { BehaviorSubject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css'
})
export class TvListComponent implements OnInit {
  tvList!:any
  page!: number;
  currentPage!: BehaviorSubject<number>;
  totalPages!: number;
   constructor(private tvService:TvService){
    this.currentPage = new BehaviorSubject(1);
  
   }

   ngOnInit(): void {
    this.currentPage.subscribe((newPage)=>{
      this.tvService.getAllTv(newPage).subscribe((data)=>{
        this.tvList=data.results;
        this.page = data.page;
        this.totalPages = data.total_pages;
        console.log(data)
        console.log(this.tvList)
       })
    })
      
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
