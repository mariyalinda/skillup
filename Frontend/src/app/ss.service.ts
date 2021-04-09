import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SsService {
  constructor(private http: HttpClient) {}
  getSsq() {
    return this.http.get('http://localhost:5000/ssq');
  }
}
