import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserInfoComponent } from './edit-user-info.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


describe('EditUserInfoComponent', () => {
  let component: EditUserInfoComponent;
  let fixture: ComponentFixture<EditUserInfoComponent>;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [MatDialogModule, DialogAddUserComponent],
    declarations: [  ],
    providers: [{
      provide: MatDialogRef,
      useValue: {}
    }, {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
