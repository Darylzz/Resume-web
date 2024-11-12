import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MediaSize } from '../constant/responsive';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [ButtonModule, CommonModule, MenuModule],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss',
})
export class AppMenuComponent implements OnInit {
  currentWidth: number;
  mediaSize = MediaSize;
  items: MenuItem[] = [
    {
      label: 'Menu',
      items: [
        {
          label: 'Home',
          routerLink: '/home',
        },
        {
          label: 'About me',
          routerLink: '/about',
        },
        {
          label: 'Contact me',
          routerLink: '/contact-me',
        },
      ],
    },
  ];

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.currentWidth = width;
  }

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      this.currentWidth = window.innerWidth;
    }
  }

  ngOnInit(): void {}

  onClickNavigateToHome() {
    this.router.navigate(['home']);
  }

  onClickNavigateToAbout() {
    this.router.navigate(['about']);
  }

  onClickNavigateToContact() {
    this.router.navigate(['contact-me']);
  }
}
