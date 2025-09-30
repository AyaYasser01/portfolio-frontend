import { Component, OnInit } from '@angular/core';
// import { HomeService, HomeItem } from './home.service';
import {PortfolioData} from '../../models/portfolio.model'
import { GlobalService } from '../../services/global-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-admin',
  imports:[CommonModule],
  templateUrl: './home-admin.html',
  styleUrls: ['./home-admin.css']
})
export class HomeAdmin implements OnInit {
  homeData: PortfolioData[] = [];

  constructor(private globelService: GlobalService) {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData() {
    this.globelService.getHome().subscribe(data => this.homeData = data);
  }

  // addItem() {
  //   const newItem: PortfolioData = {
  //     name: "New Name",
  //     title: "New Title",
  //     description: "Description here",
  //     img: "assets/images/default.jpg",
  //     links: { github: "#", linkedin: "#", cv: "#" }
  //   };
  //
  // }

  editItem(item: PortfolioData) {
    const newName = prompt("Edit Name", item.name);
    if(newName) item.name = newName;

    const newTitle = prompt("Edit Title", item.title);
    if(newTitle) item.title = newTitle;

    const newDesc = prompt("Edit Description", item.description);
    if(newDesc) item.description = newDesc;

    this.globelService.update(item).subscribe(() => this.loadHomeData());
  }

  deleteItem(id: string) {
    this.globelService.delete(id).subscribe(() => this.loadHomeData());
  }
}
