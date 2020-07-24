import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Insult } from './../models/insult';



@Injectable({
  providedIn: 'root'
})
export class InsultService {
  private getInsultUrl: string = environment.getInsultUrl;
  constructor(public http: HttpClient) { }

  getInsult(): Observable<Insult> {
    return this.http.get<Insult>(this.getInsultUrl);
  }
}
