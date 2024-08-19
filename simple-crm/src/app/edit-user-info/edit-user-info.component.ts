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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ExampleHeader } from '../example-header/example-header.component';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-edit-user-info',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDatepickerModule,
    ExampleHeader,
  ],
  templateUrl: './edit-user-info.component.html',
  styleUrl: './edit-user-info.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class EditUserInfoComponent {
  user!: User;
  loading = false;
  exampleHeader = ExampleHeader;
  constructor(
    public dialogRef: MatDialogRef<EditUserInfoComponent>,
    private firestore: Firestore
  ) {}

  saveUser() {}
}
