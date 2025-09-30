import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global-service';
import { ProjectData } from '../../models/projectData.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects-admin',
  imports:[CommonModule,FormsModule],
  templateUrl: './project-admin.html',
  styleUrls: ['./project-admin.css']
})
export class ProjectsAdmin implements OnInit {
  projectData: ProjectData[] = [];
  editingId: string | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.globalService.getProject().subscribe(data => this.projectData = data);
  }

  addProject() {
    const newItem: ProjectData = {
      title: 'New Project',
      description: 'Project description',
      imageUrl: '/assets/images/default.jpg',
      githubLink: '#',
      demoLink: '#'
    };
    this.globalService.addProject(newItem).subscribe((addedItem :any) => {
      this.projectData.push(addedItem);
    });
  }

  startEdit(id: string) {
    this.editingId = id;
  }

  saveEdit(item: ProjectData) {
  this.globalService.updateProject(item).subscribe((updatedItem: ProjectData) => {
    const index = this.projectData.findIndex(p => p._id === updatedItem._id);
    if (index !== -1) this.projectData[index] = updatedItem;
    this.editingId = null;
  });
}


  cancelEdit() {
    this.editingId = null;
    this.loadProjects();
  }

  deleteProject(id: string) {
    this.globalService.deleteProject(id).subscribe(() => {
      this.projectData = this.projectData.filter(p => p._id !== id);
    });
  }
}
