import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresComponentComponent } from './scores-component.component';

describe('ScoresComponentComponent', () => {
  let component: ScoresComponentComponent;
  let fixture: ComponentFixture<ScoresComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
