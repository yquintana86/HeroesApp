import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/user.interface';


@Component({
  selector: 'app-layout',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {


  constructor(private authService: AuthService,
              private router: Router)
  {}

  public sideBarItems = [
    {label: 'List', icon:'label', url:'./list'},
    {label: 'Add', icon:'add', url:'./add'},
    {label: 'Search', icon:'search', url:'./search'},
  ];


  onLogout(): void
  {
    if(this.authService.logout())
      this.router.navigateByUrl('/auth/login');
  }

  get currentUser(): User | undefined{
    return this.authService.currentUser;
  }


}
