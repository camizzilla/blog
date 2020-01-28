import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBlockComponent } from './newsletter-block.component';

describe('NewsletterBlockComponent', () => {
  let component: NewsletterBlockComponent;
  let fixture: ComponentFixture<NewsletterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
