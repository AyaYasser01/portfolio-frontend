import { Component, inject, OnInit, signal } from '@angular/core';
import { GlobalService } from '../../services/global-service';
import { ProjectData } from '../../models/projectData.model';


@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class Project implements OnInit {
  projectData = signal<ProjectData[]>([]);
    globalService = inject(GlobalService);
    ngOnInit() {
    this.globalService.getProject().subscribe({
      next: (res) => {
        this.projectData.set(res);
      },
      error: (err) => console.error(err)
    });
  }
}
