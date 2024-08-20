import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditUserAdressComponent } from '../edit-user-adress/edit-user-adress.component';
import { EditUserInfoComponent } from '../edit-user-info/edit-user-info.component';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  user: User = new User();
  userId: string = '';

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  async loadUser() {
    this.route.paramMap.subscribe(async (params) => {
      const userId = params.get('id');
      if (userId) {
        const userDocRef = doc(this.firestore, 'user', userId);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.user = new User(userDoc.data());
        } else {
          console.log('No such document!');
        }
      }
    });
  }

  editUserInfo() {
    const dialog = this.dialog.open(EditUserInfoComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.afterClosed().subscribe(() => {
      this.loadUser();
      this.cdr.detectChanges();
    });
  }
  editUserAdress() {
    const dialog = this.dialog.open(EditUserAdressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.afterClosed().subscribe(() => {
      this.loadUser();
      this.cdr.detectChanges();
    });
  }
}
