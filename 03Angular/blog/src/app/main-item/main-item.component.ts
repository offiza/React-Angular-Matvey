import { Component, OnInit } from '@angular/core';
import { MainItem } from '../mainItem';
import { MainItems } from '../mock-main-item';
@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.css']
})
export class MainItemComponent implements OnInit {
  mainItems = MainItems;
  selectedItem?: MainItem;

  constructor() { }

  ngOnInit() {
  }

  onSelect(mainItems: MainItem): void {
    this.selectedItem = mainItems;
  }
}
