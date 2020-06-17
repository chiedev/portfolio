import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressProjectsComponent } from './wordpress-projects.component';

describe('WordpressProjectsComponent', () => {
  let component: WordpressProjectsComponent;
  let fixture: ComponentFixture<WordpressProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordpressProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
