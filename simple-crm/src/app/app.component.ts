import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from 'firebase/firestore/lite';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple-crm';

  constructor(private router: Router) {
    const firebaseConfig = {
      apiKey: 'AIzaSyBtdpKP8KQpyQ15K8StzNo5Gly2NxrWFys',
      authDomain: 'simple-crm-23a6e.firebaseapp.com',
      projectId: 'simple-crm-23a6e',
      storageBucket: 'simple-crm-23a6e.appspot.com',
      messagingSenderId: '657982237885',
      appId: '1:657982237885:web:f990e8265f489175c75bd4',
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
