import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MediaSize } from '../constant/responsive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss',
})
export class AppMenuComponent {
  currentWidth: number;
  mediaSize = MediaSize;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.currentWidth = width;
  }

  constructor(private router: Router) {}

  onClickNavigateToHome() {
    this.router.navigate(['home']);
  }

  onClickNavigateToAbout() {
    this.router.navigate(['about']);
  }
}
