import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ExtensionModel} from '../model/Extension.model';
import {ExtensionService} from '../services/extension.service';
import {
  MatCardModule,
} from '@angular/material/card';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MatSlideToggle, FormsModule, NgClass, NgStyle],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  extensions: ExtensionModel[] = [];
  filteredExtensions: ExtensionModel[] = [];

  selectedFilter : 'all' | 'active' | 'inactive' = 'all';

  constructor(private extensionService: ExtensionService) {
    this.extensions = this.extensionService.getExtensions();
  }

  ngOnInit() {
    this.applyFilter();
  }

  filterExtensions(filter: 'all' | 'active' | 'inactive') {
    this.selectedFilter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedFilter === 'all') {
      this.filteredExtensions = this.extensions;
    } else if (this.selectedFilter === 'active') {
      this.filteredExtensions = this.extensions.filter(extension => extension.isActive);
    } else if (this.selectedFilter === 'inactive') {
      this.filteredExtensions = this.extensions.filter(extension => !extension.isActive);
    }
  }

}
