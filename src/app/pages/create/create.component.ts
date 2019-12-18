import { Component, OnInit } from '@angular/core';
import { SnowboardClass } from '../../shared/snowboard-class';
import { SnowboardService } from '../../shared/snowboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  snwb: SnowboardClass;

  constructor(private snowboardService: SnowboardService, private router: Router) {}

  ngOnInit() {
    this.snwb = new SnowboardClass();
  }

  createSnwbd() {
    this.snowboardService.addSnwbd(this.snwb)
    .subscribe((result) => {
      console.log(this.snwb);
      this.router.navigate(['/home']);
    });
  }
}
