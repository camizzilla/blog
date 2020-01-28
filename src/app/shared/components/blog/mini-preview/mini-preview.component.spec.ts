import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPreviewComponent } from './mini-preview.component';

describe('MiniPreviewComponent', () => {
  let component: MiniPreviewComponent;
  let fixture: ComponentFixture<MiniPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
