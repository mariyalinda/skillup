import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
})
export class AddquestionComponent implements OnInit {
  quest = {
    subject: '',
    topic: '',
    question: '',
    hint1: '',
    hint2: '',
    hint3: '',
    imageUrl: '',
  };
  constructor(
    private router: Router,
    private questionservice: QuestionService
  ) {}

  ngOnInit(): void {}
  addq() {
    this.questionservice.newQuestion(this.quest);
    alert('Success!');
    this.router.navigate(['/tdash']);
  }
}
