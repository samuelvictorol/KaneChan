/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TarefeiroComponent } from './tarefeiro.component';

describe('TarefeiroComponent', () => {
  let component: TarefeiroComponent;
  let fixture: ComponentFixture<TarefeiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefeiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
