import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionSelectDialogComponent } from './emotion-select-dialog.component';

describe('EmotionSelectDialogComponent', () => {
  let component: EmotionSelectDialogComponent;
  let fixture: ComponentFixture<EmotionSelectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionSelectDialogComponent]
    });
    fixture = TestBed.createComponent(EmotionSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
