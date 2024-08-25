import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAdressComponent } from './edit-user-adress.component';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('EditUserAdressComponent', () => {
  let component: EditUserAdressComponent;
  let fixture: ComponentFixture<EditUserAdressComponent>;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, DialogAddUserComponent],
      declarations: [  ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data to test if it is passed/used correctly
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
