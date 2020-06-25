import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinputComponent } from './newinput.component';

describe('NewinputComponent', () => {
  let component: NewinputComponent;
  let fixture: ComponentFixture<NewinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
