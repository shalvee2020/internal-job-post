import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgIf} from '@angular/common';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf,NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn: boolean = false;
  protected readonly toast = toast;
  userInfo: any;
  constructor() {
    const userdata = localStorage.getItem('token');
    if (userdata) {
      try {
        this.userInfo = JSON.parse(userdata);
        this.isLoggedIn = true;
      } catch (error) {
        console.error("Error parsing user data:", error);
        this.isLoggedIn = false;
      }
    }
  }
  logoff(){
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
