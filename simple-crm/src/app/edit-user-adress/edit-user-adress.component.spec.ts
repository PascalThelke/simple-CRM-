import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAdressComponent } from './edit-user-adress.component';

describe('EditUserAdressComponent', () => {
  let component: EditUserAdressComponent;
  let fixture: ComponentFixture<EditUserAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserAdressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
