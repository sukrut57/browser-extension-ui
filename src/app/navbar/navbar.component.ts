import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  imports: [MatSlideToggleModule, MatToolbarModule, MatIcon],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  darkModeEnabled = true;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

   this.matIconRegistry.addSvgIcon(
     'logo-dark',
     this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/logo-dark-theme.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'logo-light',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/logo-light-theme.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'sun',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/icon-sun.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'moon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/icon-moon.svg')
    );
  }

  toggleTheme() {
    this.darkModeEnabled = !this.darkModeEnabled;
    document.body.classList.toggle('dark-theme', this.darkModeEnabled);
    document.body.classList.toggle('light-theme', !this.darkModeEnabled);
  }
}
