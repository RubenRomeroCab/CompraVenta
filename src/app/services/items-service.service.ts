import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  private items :Item []=[

  ]

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }
}
