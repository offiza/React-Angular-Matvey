import { Component, OnInit, Input } from '@angular/core';
import { MainItem } from '../mainItem';

@Component({
  selector: 'app-main-item-detail',
  templateUrl: './main-item-detail.component.html',
  styleUrls: ['./main-item-detail.component.css']
})
export class MainItemDetailComponent implements OnInit {

  @Input() mainItem?: MainItem;

  constructor() { }

  ngOnInit(): void {
  }

}
