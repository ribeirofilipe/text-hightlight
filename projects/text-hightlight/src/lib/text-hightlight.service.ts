import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextHightlightService {

  constructor() { }

  hightlightText(message: string, searchText: string) {
    return searchText ?
      message.replace(new RegExp(searchText, "gi"), match => `<mark class="text-hightlight">${match}</mark>`) : 
      message;  
  }
}