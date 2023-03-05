import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  names: string [];

  constructor() {
    this.names = ['Monica', 'Arianna', 'Giulia', 'Matilde'];
  }

  ngOnInit() {
    
  }
}
