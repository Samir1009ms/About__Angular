import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string = '';

  items = [
    { name: 'home', route: '' },
    { name: 'about', route: 'about' },
    { name: 'contact', route: 'contact' },
    { name: 'portfolios', route: 'portfolios' },
    { name: 'journey', route: 'journey' },
    { name: 'blog', route: 'blog' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get(title: string) {
    this.pageTitle = title;
    console.log(this.pageTitle);
  }
}
