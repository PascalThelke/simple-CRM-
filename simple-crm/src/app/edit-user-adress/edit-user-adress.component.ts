import { Component } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import {
  addDoc,
  collection,
  Firestore,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user-adress',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
  ],
  templateUrl: './edit-user-adress.component.html',
  styleUrl: './edit-user-adress.component.scss',
})
export class EditUserAdressComponent {
  user!: User;
  loading = false;
  
  constructor(
    public dialogRef: MatDialogRef<EditUserAdressComponent>,
    private firestore: Firestore
  ) {}

  saveUser() {
    const userDoc = doc(this.firestore, 'user', this.user.id);
    return updateDoc(userDoc, {
      ...this.user,
    });
  }
}
