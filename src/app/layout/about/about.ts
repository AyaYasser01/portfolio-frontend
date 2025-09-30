import { Component, inject, OnInit, signal } from '@angular/core';
import { GlobalService } from '../../services/global-service';
import { About } from '../../models/about.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  aboutData = signal<About[]>([]);
  globalService = inject(GlobalService);

  ngOnInit() {
    this.globalService.getAbout().subscribe({
      next: (res) => {
        this.aboutData.set(res);
      },
      error: (err) => console.error(err)
    });
  }
}
