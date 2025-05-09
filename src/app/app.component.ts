import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'browser-extension-ui';

}
