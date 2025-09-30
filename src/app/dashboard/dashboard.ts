import { Component } from '@angular/core';
import { Navbar } from "../layout/navbar/navbar";
import { Footer } from "../layout/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Footer,RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
