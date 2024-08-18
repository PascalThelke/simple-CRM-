import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple-crm';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor(private router: Router) {
    const firebaseConfig = environment.firebase;
    const aCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(aCollection);
    // const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);

    // // Get a list of cities from your database
    // async function getCities(db: Firestore) {
    //   const citiesCol = collection(db, 'cities');
    //   const citySnapshot = await getDocs(citiesCol);
    //   const cityList = citySnapshot.docs.map((doc) => doc.data());
    //   return cityList;
    // }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
