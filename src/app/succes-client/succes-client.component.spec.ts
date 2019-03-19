import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesClientComponent } from './succes-client.component';

describe('SuccesClientComponent', () => {
  let component: SuccesClientComponent;
  let fixture: ComponentFixture<SuccesClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
