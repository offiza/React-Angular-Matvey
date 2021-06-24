import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemDetailComponent } from './main-item-detail.component';

describe('MainItemDetailComponent', () => {
  let component: MainItemDetailComponent;
  let fixture: ComponentFixture<MainItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
