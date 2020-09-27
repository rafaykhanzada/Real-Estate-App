/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellComponent } from './Sell.component';

describe('SellComponent', () => {
  let component: SellComponent;
  let fixture: ComponentFixture<SellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
