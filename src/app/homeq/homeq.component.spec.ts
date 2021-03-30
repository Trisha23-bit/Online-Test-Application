import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeqComponent } from './homeq.component';

describe('HomeqComponent', () => {
  let component: HomeqComponent;
  let fixture: ComponentFixture<HomeqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
