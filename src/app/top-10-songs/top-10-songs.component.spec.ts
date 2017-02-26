/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top10SongsComponent } from './top-10-songs.component';

describe('Top10SongsComponent', () => {
  let component: Top10SongsComponent;
  let fixture: ComponentFixture<Top10SongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10SongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10SongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
