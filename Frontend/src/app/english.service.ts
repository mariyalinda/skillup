import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnglishService {
  constructor(private http: HttpClient) {}
  getEngq() {
    return this.http.get('http://localhost:5000/engq');
  }
}
