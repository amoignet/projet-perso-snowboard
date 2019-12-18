import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SnowboardClass } from '../../shared/snowboard-class';

@Component({
  selector: 'app-snowboard-list',
  templateUrl: './snowboard-list.component.html',
  styleUrls: ['./snowboard-list.component.scss']
})
export class SnowboardListComponent implements OnInit {

  @Input() boardList: SnowboardClass[];
  @Output() boardClick = new EventEmitter<SnowboardClass>();

  constructor() { }

  ngOnInit() {
  }

    boardClicked(commente) {
      this.boardClick.emit(commente);
    }
}
