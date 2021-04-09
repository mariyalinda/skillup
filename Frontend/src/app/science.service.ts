import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScienceService {
  constructor(private http: HttpClient) {}
  getScienceq() {
    return this.http.get('http://localhost:5000/scienceq');
  }
}
