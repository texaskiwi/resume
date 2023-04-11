import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { WorkExperience } from './models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {


 workExperience: Array<WorkExperience> = [
    new WorkExperience({
      title: 'Senior Developer (Contract) - Transocean',
      description: 'First Angular 2.0 project. Mentored junior devs and got familiar with functional/reactive programming',
      startDate: new Date('4/2015'),
      endDate: new Date('4/2017')
    }),
    new WorkExperience({
      title: 'Senior Developer (Contract) - EDF Trading',
      description: 'Maintained and added Features to an existing Angular 2.0 application. Gave presentation to company devs on Angular 2+',
      startDate: new Date('4/2017'),
      endDate: new Date('6/2018')
    }),
    new WorkExperience({
      title: 'Application Developer III',
      description: 'Greenfield project in Angular 5. Team dismissed when budget cancelled',
      startDate: new Date('6/2018'),
      endDate: new Date('10/2018')
    }),
    new WorkExperience({
      title: 'Senior Software Engineer (Contract)',
      description: 'Angular 6 and microservices environment',
      startDate: new Date('11/2018'),
      endDate: new Date('6/2019')
    }),
    new WorkExperience({
      title: 'Anadarko/Occidental',
      description: 'Greenfield Angular 8 project, lots of visualization and map integration. Acquisition and Covid killed the project',
      startDate: new Date('5/2019'),
      endDate: new Date('4/2020')
    }),
    new WorkExperience({
      title: 'FranchiCzar',
      description: 'Angular 10 - 13 CRM like project. Company failed to secure second round funding',
      startDate: new Date('8/2020'),
      endDate: new Date('2/2023')
    }),
  ]

  constructor() { }
  getWorkExperience() : Observable<WorkExperience[]>{
    let data = of(this.workExperience).pipe(tap((x) => console.log(x)));
    return data;
  }

}
