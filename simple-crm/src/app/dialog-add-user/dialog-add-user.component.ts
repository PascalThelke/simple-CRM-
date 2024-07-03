import { Component } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ExampleHeader } from '../example-header/example-header.component';
import { User } from '../../models/user.class';

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
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user = new User();
  birthDate: Date = new Date();
  onNoClick() {}
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
  }
  exampleHeader = ExampleHeader;
}
