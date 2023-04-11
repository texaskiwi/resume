import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WorkExperience } from './models/work-experience';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resumeService: ResumeService;

  constructor(resumeService: ResumeService){
    this.resumeService = resumeService;
  }

  workExperience$ = new Observable<WorkExperience[]>();
  ngOnInit(): void {
    this.workExperience$ = this.resumeService.getWorkExperience();
  }

  onRated(work: WorkExperience, rating: number){
    work.rating = rating;
    console.log(rating);
  }
}
