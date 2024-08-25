import { Component } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ExampleHeader } from '../example-header/example-header.component';
import { User } from '../../models/user.class';
import {
  addDoc,
  collection,
  Firestore,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatFormFieldModule,
    FormsModule,
    MatDialogTitle,
    MatButtonModule,
    MatDialogClose,
    MatInputModule,
    MatDatepickerModule,
    ExampleHeader,
    MatProgressBarModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date = new Date();
  loading = false;
  exampleHeader = ExampleHeader;
  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore
  ) {}
  onNoClick() {}
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    const userCollection = collection(this.firestore, 'user');
    addDoc(userCollection, this.user.toJSON())
      .then((docRef) => {
        console.log('User added with ID:', docRef.id);
        this.user.id = docRef.id;
        this.loading = false;
        this.dialogRef.close();
        const userDoc = doc(this.firestore, 'user', docRef.id);
        return updateDoc(userDoc, { id: docRef.id });
      })
      .catch((error: any) => {
        console.error('Error adding or updating user: ', error);
      });
  }


}
