import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, getDocs, doc, getDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = new User();
  userList: any[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  async ngOnInit() {
    const userCollection = collection(this.firestore, 'user');
    const userSnapshot = await getDocs(userCollection);
    this.userList = userSnapshot.docs.map((doc) => doc.data());
    console.log(this.userList);
  }

  async getUserById(userId: string) {
    const userDocRef = doc(this.firestore, 'user', userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      console.log(userDoc.data());
    } else {
      console.log('No such document!');
    }
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
