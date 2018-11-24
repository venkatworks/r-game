import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgameComponent } from './rgame.component';

describe('RgameComponent', () => {
  let component: RgameComponent;
  let fixture: ComponentFixture<RgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
