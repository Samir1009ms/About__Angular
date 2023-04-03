import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3300/items').pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }
}
