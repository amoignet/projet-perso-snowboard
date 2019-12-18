import { Component, OnInit } from '@angular/core';
import { SnowboardService } from '../../shared/snowboard.service';
import { SnowboardClass } from '../../shared/snowboard-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  boards: SnowboardClass[];
  board: SnowboardClass;

  constructor(private snowboardService: SnowboardService) {}

  ngOnInit() {
    this.snowboardService.getboards()
    .subscribe((boards: SnowboardClass[]) => {
      console.log(boards);
      return (this.boards = boards);
    });
  }

  detectedClick(boardEvent) {
    this.board = boardEvent;
  }
}
