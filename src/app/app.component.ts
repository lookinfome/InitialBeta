import { Component } from '@angular/core';
import { Router } from '@angular/router';
import contentData from '../assets/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  name: string = "";
  currentYear: number = 2024;
  navHome: string = "";
  contactDetails: {
    type: string,
    value: string,
    icon: string
  }[]=[]

  constructor(private router: Router) { }

  ngOnInit() 
  {
    this.name = contentData.basicdetail.name;
    this.currentYear = new Date().getFullYear();
    this.navHome = contentData.actionlinks[0].link;


    if (this.contactDetails.length <= 0 || this.contactDetails === null)
    {
      contentData.basicdetail.contactDetails.forEach(record=>{
        this.contactDetails.push(
          {
            type: record.type,
            value: record.value,
            icon: record.icon
          }
        )
  
      })

      this.contactDetails = this.contactDetails.slice(3)
    }
    
  }
  
  
}
