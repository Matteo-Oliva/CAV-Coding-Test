import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedComponent } from './fetched.component';

describe('FetchedComponent', () => {
  let component: FetchedComponent;
  let fixture: ComponentFixture<FetchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
