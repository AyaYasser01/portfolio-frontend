import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { About } from '../models/about.model';
import { PortfolioData } from '../models/portfolio.model';
import { ProjectData } from '../models/projectData.model';
import { IContact } from '../models/contact.model';

const apiURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  http = inject(HttpClient);

  getHome() {
    return this.http.get<PortfolioData[]>(`${apiURL}/home`);
  }

  getAbout() {
    return this.http.get<About[]>(`${apiURL}/about`);
  }
  getProject() {
    return this.http.get<ProjectData[]>(`${apiURL}/projects`);
  }
  getContact() {
    return this.http.get<IContact[]>(`${apiURL}/contact`);
  }
  // POST: send contact message
  postContact(data: any) {
    return this.http.post(`${apiURL}/contact`, data);
  }
  deleteContact(id: string) {
    return this.http.delete(`${apiURL}/contact/${id}`);
  }
  // HOME
  add(item: any) {
    return this.http.post(`${apiURL}/home`, item);
  }

  update(item: any) {
    return this.http.put(`${apiURL}/home/${item._id}`, item);
  }

  delete(id: string) {
    return this.http.delete(`${apiURL}/home/${id}`);
  }
  // ABOUT

  addAbout(item: About) {
    return this.http.post<About>(`${apiURL}/about`, item);
  }

  updateAbout(item: About) {
    return this.http.put<About>(`${apiURL}/about/${item._id}`, item);
  }

  deleteAbout(id: string) {
    return this.http.delete(`${apiURL}/about/${id}`);
  }
  //PROJECT

  // PROJECT
addProject(project: ProjectData) {
  return this.http.post<ProjectData>(`${apiURL}/projects`, project);
}

updateProject(project: ProjectData) {
  return this.http.put<ProjectData>(`${apiURL}/projects/${project._id}`, project);
}

deleteProject(id: string) {
  return this.http.delete<void>(`${apiURL}/projects/${id}`);
}

}
