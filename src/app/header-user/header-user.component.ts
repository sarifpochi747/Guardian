import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {
  constructor(public authService: AuthService) { }
  logout() {
    this.authService.doLogout()
  }
}
