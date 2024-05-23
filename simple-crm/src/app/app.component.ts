import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm';
  
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
