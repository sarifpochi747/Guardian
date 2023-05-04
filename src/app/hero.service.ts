import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero_type';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'localhost:5000/addProfiles'; // URL to web api
  constructor(private http: HttpClient) { }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
