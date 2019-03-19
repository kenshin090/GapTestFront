import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesPolicyComponent } from './succes-policy.component';

describe('SuccesPolicyComponent', () => {
  let component: SuccesPolicyComponent;
  let fixture: ComponentFixture<SuccesPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
