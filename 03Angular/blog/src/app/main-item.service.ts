import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MainItem } from './mainItem';
import { MainItems } from './mock-main-item';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MainItemService {

  constructor(private messageService: MessageService) { }

  getMainItems(): Observable<MainItem[]> {
    const mainItems = of(MainItems);
    this.messageService.add('HeroService: fetched heroes');
    return mainItems;
  }
}
