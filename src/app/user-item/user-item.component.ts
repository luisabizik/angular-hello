import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {


  @Input() name: string | undefined;

  constructor() {
    
  }

  ngOnInit() {
    
  }
}
