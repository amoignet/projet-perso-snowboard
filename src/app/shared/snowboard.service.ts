import { Injectable } from '@angular/core';
// import { SNOWBOARDS } from './snowboard-mock';
import { SnowboardClass } from './snowboard-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnowboardService {

 static URL = 'http://localhost:3000/api/boards';

 snowboards: SnowboardClass[];

 constructor(private http: HttpClient) { }

getboards()  {
  return this.http.get(SnowboardService.URL);
  }

addSnwbd(snwbd: SnowboardClass) {
  return this.http.post(SnowboardService.URL, snwbd);
  }


}
