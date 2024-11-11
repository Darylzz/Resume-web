import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MediaSize } from '../constant/responsive';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentWidth: number;
  mediaSize = MediaSize;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.currentWidth = width;
  }

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      this.currentWidth = window.innerWidth;
    }
  }

  onClickNavigateToContact() {
    this.router.navigate(['contact-me']);
  }
}
