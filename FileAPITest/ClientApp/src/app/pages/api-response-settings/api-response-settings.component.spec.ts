import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponseSettingsComponent } from './api-response-settings.component';

describe('ApiResponseSettingsComponent', () => {
  let component: ApiResponseSettingsComponent;
  let fixture: ComponentFixture<ApiResponseSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiResponseSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiResponseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
