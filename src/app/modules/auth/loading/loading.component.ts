import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  showLoading = false
  constructor(private loading:LoadingService){}

  ngOnInit(): void {
    this.loading.loading$.subscribe((load:boolean)=>{
      this.showLoading = load
    })
  }
}
