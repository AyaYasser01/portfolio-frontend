import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './layout/home/home';
import { AboutComponent } from './layout/about/about';
import { Project } from './layout/project/project';
import { ContactComponent } from './layout/contact/contact';
import { HomeAdmin } from './dashboard/home-admin/home-admin';
import { ContactAdmin } from './dashboard/contact-admin/contact-admin';
import { AboutAdmin } from './dashboard/about-admin/about-admin';
import {  ProjectsAdmin } from './dashboard/project-admin/project-admin';

export const routes: Routes = [
  {
    path: '',
    component: Layout,children:[
      {path:'',redirectTo:'home',pathMatch:"full"},
      {path:'home',component:Home},
      {path:'about',component:AboutComponent},
      {path:'projects',component:Project},
      {path:'contact',component:ContactComponent},
    ]
  },
  { path: 'admin', component: Dashboard ,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeAdmin},
    {path:'about', component:AboutAdmin},
    {path:'projects', component:ProjectsAdmin},
    {path:'contact', component:ContactAdmin},
  ]},
];
