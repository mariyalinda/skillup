import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor(private http: HttpClient) {}
  getMathq() {
    return this.http.get('http://localhost:5000/mathq');
  }
}
