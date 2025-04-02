import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, MatButton, NgClass],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'browser-extension-ui';
  isDark = true;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
    document.body.classList.toggle('light-theme', !this.isDark);
  }
}
