import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  navBar = ['home', 'about', 'projects', 'contact']

  firstLetterIsCapital(element: string) {
    return element[0].toUpperCase() + element.slice(1)
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}

