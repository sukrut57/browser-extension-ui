import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ExtensionModel} from '../model/Extension.model';
import {ExtensionService} from '../services/extension.service';
import {
  MatCardModule,
} from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  extensions: ExtensionModel[] = [];

  constructor(private extensionService: ExtensionService) {
    this.extensions = this.extensionService.getExtensions();
  }
}
