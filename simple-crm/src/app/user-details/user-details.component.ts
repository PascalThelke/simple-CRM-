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
      // subscribing to changes in the route parameters
      const userId = params.get('id'); // Extract the 'id' parameter from the route params
      if (userId) {
        // if the userID variable is set go next
        const userDocRef = doc(this.firestore, 'user', userId); // Create a reference to the user document in Firestore
        const userDoc = await getDoc(userDocRef); // Fetch the user document from Firestore
        if (userDoc) {
          // Check if the document exists
          this.user = new User(userDoc.data()); // // Create a new User object using the retrieved data to save the real object from being changed directly while being edited later
        } else {
          console.log(`User with ID "${userId}" not found.`); // Log an error message if the document doesn't exist
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
