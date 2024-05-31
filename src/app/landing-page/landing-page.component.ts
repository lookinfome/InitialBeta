import { Component, OnInit } from '@angular/core';
import contentData from '../../assets/content.json';

import { Router } from '@angular/router';

interface ActionLinks {
  action: string,
  link: string
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  /**
   * Author details
   */
  name: string = "";
  introduction: string = "";
  image: string = "";
  actionlinks: ActionLinks[] = [];
  currentCompany: string = "";
  designation: string = "";
  currentYear: number = 2024;

  /**
   * Contructor
   */
  constructor(private router: Router) { }

  ngOnInit() {
    this.name = contentData.basicdetail.name;
    this.introduction = contentData.basicdetail.shortIntroduction;
    this.image = contentData.basicdetail.profilePicture;
    this.currentYear = new Date().getFullYear();
    this.designation = contentData.basicdetail.designation;
    this.currentCompany = contentData.basicdetail.currentCompany;

    if (this.actionlinks.length <= 0 || this.actionlinks === null) {
      contentData.actionlinks.forEach(record => {
        this.actionlinks.push(record)
      });

      this.actionlinks = this.actionlinks.slice(1)
    }


    

    

  }



}
