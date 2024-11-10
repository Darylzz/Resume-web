import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss',
})
export class AppMenuComponent {
  constructor(private router: Router) {}

  onClickNavigateToHome() {
    this.router.navigate(['home']);
  }

  onClickNavigateToAbout() {
    this.router.navigate(['about']);
  }
}
