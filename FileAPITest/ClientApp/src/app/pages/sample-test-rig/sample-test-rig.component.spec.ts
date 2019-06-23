import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestRigComponent } from './sample-test-rig.component';

describe('SampleTestRigComponent', () => {
  let component: SampleTestRigComponent;
  let fixture: ComponentFixture<SampleTestRigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTestRigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTestRigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
