import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: false,
  // imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  experience: any;
  experienceInYears: string;
  CurrentDayOfWork: number = new Date().getTime();
  firstDayOfWork: number = new Date('2023-05-01').getTime();

  constructor() {}

  ngOnInit(): void {
    const summaryExperience = this.CurrentDayOfWork - this.firstDayOfWork;
    this.experience = Math.floor(summaryExperience / (1000 * 60 * 60 * 24));
    const years = (this.experience / 365).toString();
    const remainingDays = this.experience % 365;
    const months = (remainingDays / 30).toFixed(1);
    this.experienceInYears = `${years.split('.')[0]}.${
      months.split('.')[0]
    } years`;
  }
}
