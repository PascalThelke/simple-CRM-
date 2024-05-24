import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHeaderComponent } from './example-header.component';

describe('ExampleHeaderComponent', () => {
  let component: ExampleHeaderComponent;
  let fixture: ComponentFixture<ExampleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
