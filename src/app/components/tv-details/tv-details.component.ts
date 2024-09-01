import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.css'
})
export class TvDetailsComponent implements OnInit {
 tvData: any;
  id!: number;

  constructor(private tvServ: TvService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'))
     this.tvServ.getTvById(this.id).subscribe((data)=>{
      this.tvData=data;
     })
  }
}
