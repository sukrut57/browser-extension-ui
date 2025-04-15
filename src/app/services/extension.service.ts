import { Injectable } from '@angular/core';
import {Exception} from 'sass';
import {ExtensionModel} from '../model/Extension.model';
import {extensionData} from '../model/Extension.data';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  private extensions: ExtensionModel[] = extensionData;

  constructor() { }

  getExtensions(): ExtensionModel[] {
    return this.extensions;
  }

}
