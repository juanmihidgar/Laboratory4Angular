import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.css'],
})
export class PublicMenuComponent implements OnInit {
  menuTitles = ['Home', 'Login', 'About'];
  activeLink = this.menuTitles[0];

  constructor() {}

  onClick(e) {
    this.activeLink = e.target.textContent;
    console.log(e.target.textContent);
  }

  ngOnInit(): void {}
}
