import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNavComponent } from './visitor-nav.component';

describe('VisitorNavComponent', () => {
  let component: VisitorNavComponent;
  let fixture: ComponentFixture<VisitorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
