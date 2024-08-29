import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userCount: number = 0;
  constructor(private route: ActivatedRoute, private firestore: Firestore) {}
  ngOnInit(): void {
    this.loadUserCount();
  }
  async loadUserCount() {
    const userCollectionRef = collection(this.firestore, 'user');
    const userSnapshot = await getDocs(userCollectionRef);
    this.userCount = userSnapshot.size;
  }
}
