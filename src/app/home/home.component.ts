import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ExtensionModel} from '../model/Extension.model';
import {ExtensionService} from '../services/extension.service';
import {
  MatCardModule,
} from '@angular/material/card';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MatSlideToggle, FormsModule, NgClass],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isEnabled = true;
  extensions: ExtensionModel[] = [];

  constructor(private extensionService: ExtensionService) {
    this.extensions = this.extensionService.getExtensions();
  }
}
