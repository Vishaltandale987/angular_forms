import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminPanelComponent } from './addmin-panel.component';

describe('AddminPanelComponent', () => {
  let component: AddminPanelComponent;
  let fixture: ComponentFixture<AddminPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddminPanelComponent]
    });
    fixture = TestBed.createComponent(AddminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
