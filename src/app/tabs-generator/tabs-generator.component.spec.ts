import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGeneratorComponent } from './tabs-generator.component';

describe('TabsGeneratorComponent', () => {
  let component: TabsGeneratorComponent;
  let fixture: ComponentFixture<TabsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
