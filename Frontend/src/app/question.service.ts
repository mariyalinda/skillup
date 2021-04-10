import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  item: {
    subject: '';
    topic: '';
    question: '';
    hint1: '';
    hint2: '';
    hint3: '';
    imageUrl: '';
  };
  constructor(private http: HttpClient) {}
  newQuestion(item: any) {
    return this.http
      .post('http://localhost:5000/insert', { quest: item })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
