import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordDiagramGeneratorComponent } from './chord-diagram-generator.component';

describe('ChordDiagramGeneratorComponent', () => {
  let component: ChordDiagramGeneratorComponent;
  let fixture: ComponentFixture<ChordDiagramGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordDiagramGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordDiagramGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
