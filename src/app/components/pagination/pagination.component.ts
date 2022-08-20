import { Component, OnDestroy, OnInit } from '@angular/core';
import { GifService } from '../../service/gif.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {


  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {}

  constructor( private gifsService: GifService ) { }

  get pag() {
    return this.gifsService.pag;
  }

  paginationNext() {
    if (parseInt(this.gifsService.pag) >= 0) {
      this.gifsService.paginationNext(12);
    }
  }

  paginationPrev() {
    if (parseInt(this.gifsService.pag) >= 12) {
      this.gifsService.paginationPrev(12);
    }
  }

}
