import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  items = [
    {
      class: 'about',
      title: 'About me',
      route: 'about',
    },
    {
      class: 'portfolios',
      title: '😮 Let’s see portfolios',
      route: 'portfolios',
    },
  ];
}
