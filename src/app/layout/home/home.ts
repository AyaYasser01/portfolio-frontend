import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { GlobalService } from '../../services/global-service';
import { PortfolioData } from '../../models/portfolio.model';

// interface PortfolioData {
//   name: string;
//   title: string;
//   description: string;
//   img: string;
//   links: {
//     github: string;
//     linkedin: string;
//     cv: string;
//   };
// }

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  homeData = signal<PortfolioData[]>([]);
  globalService = inject(GlobalService);

  ngOnInit() {
    this.globalService.getHome().subscribe({
      next: (res) => {
        console.log(res);

        this.homeData.set(res);
      },
    });
  }
}
