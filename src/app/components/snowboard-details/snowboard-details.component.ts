import { Component, OnInit, Input } from '@angular/core';
import { SnowboardClass } from '../../shared/snowboard-class';

@Component({
  selector: 'app-snowboard-details',
  templateUrl: './snowboard-details.component.html',
  styleUrls: ['./snowboard-details.component.scss']
})
export class SnowboardDetailsComponent implements OnInit {

  @Input() comment: SnowboardClass;

  constructor() { }

  ngOnInit() {
  }

}
