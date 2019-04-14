import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountwordComponent } from './countword.component';

describe('CountwordComponent', () => {
  let component: CountwordComponent;
  let fixture: ComponentFixture<CountwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
