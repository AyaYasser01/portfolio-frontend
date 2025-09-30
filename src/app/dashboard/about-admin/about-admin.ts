import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global-service';
import { About } from '../../models/about.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-admin',
  imports:[CommonModule,FormsModule],
  templateUrl: './about-admin.html',
  styleUrls: ['./about-admin.css']
})
export class AboutAdmin implements OnInit {
  aboutData: About[] = [];
  editingId: string | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }

  loadAboutData() {
    this.globalService.getAbout().subscribe(data => this.aboutData = data);
  }

  addItem() {
    const newItem: About = {
      description: "New description",
      skills: [],
      education: { degree: "", university: "", year: "" },
      services: [],
      experience: []
    };
    this.globalService.addAbout(newItem).subscribe(addedItem => {
      this.aboutData.push(addedItem);
    });
  }

  startEdit(id: string) {
    this.editingId = id;
  }

  saveEdit(item: About) {
    if ((item as any).skillsString) {
      item.skills = (item as any).skillsString.split(',').map((s :any) => s.trim());
      delete (item as any).skillsString;
    }
    this.globalService.updateAbout(item).subscribe(updatedItem => {
      const index = this.aboutData.findIndex(i => i._id === updatedItem._id);
      if(index !== -1) this.aboutData[index] = updatedItem;
      this.editingId = null;
    });
  }

  cancelEdit() {
    this.editingId = null;
    this.loadAboutData();
  }

  deleteItem(id: string) {
    this.globalService.deleteAbout(id).subscribe(() => {
      this.aboutData = this.aboutData.filter(item => item._id !== id);
    });
  }

  // Skills
  addSkill(item: About, newSkill: string) {
    if(!newSkill.trim()) return;
    item.skills.push(newSkill.trim());
  }

  removeSkill(item: About, index: number) {
    item.skills.splice(index, 1);
  }

  // Services
  addService(item: About) {
    item.services.push({ name: '', description: '', icon: '' });
  }

  removeService(item: About, index: number) {
    item.services.splice(index, 1);
  }

  // Experience
  addExperience(item: About) {
    item.experience.push({ jobTitle: '', company: '', years: '', description: '' });
  }

  removeExperience(item: About, index: number) {
    item.experience.splice(index, 1);
  }
}
