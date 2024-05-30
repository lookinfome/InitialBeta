import { Component, OnInit } from '@angular/core';
import contentData from '../../assets/content.json';

interface ActionLinks {
  action: string,
  link: string
}

let cacheIndex: number = 0;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  name: string = "";
  introduction: string = "";
  image: string = "";
  actionlinks: ActionLinks[] = [];
  currentYear: number = 2024;


  ngOnInit() {
    this.name = contentData.authordetail.name;
    this.introduction = contentData.authordetail.shortIntroduction;
    this.image = contentData.authordetail.profilePicture;
    this.currentYear = new Date().getFullYear();

    if (this.actionlinks.length <= 0 || this.actionlinks === null) {
      contentData.actionlinks.forEach(record => {
        this.actionlinks.push(record)
      });
    }

    

  }



}
