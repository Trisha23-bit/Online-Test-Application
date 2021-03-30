import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpComponent } from './frontp.component';

describe('FrontpComponent', () => {
  let component: FrontpComponent;
  let fixture: ComponentFixture<FrontpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
