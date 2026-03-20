import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home{
  isDarkMode = false;

  constructor(private router: Router) {} // Required for navigateTo

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
