/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentComponent } from './Rent.component';

describe('RentComponent', () => {
  let component: RentComponent;
  let fixture: ComponentFixture<RentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
