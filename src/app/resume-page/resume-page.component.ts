import { Component } from '@angular/core';
import contentData from '../../assets/content.json';


@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {


  name: string = "";
  aboutme: string = "";
  designation: string = "";

  contactDetails: {
    type: string,
    value: string,
    icon: string
  }[] =[]

  interestsDetails: {
    interest: string,
    icon: string
  }[]=[]

  showAboutMeButtonValue = "About Me";
  showAboutMe: boolean = true;
  toggleShowAboutMe()
  {
    this.showAboutMe = !this.showAboutMe;
    if(this.showAboutMe)
    {
      this.showAboutMeButtonValue = "About Me"
    }
    else
    {
      this.showAboutMeButtonValue = "Flip Back"
    }
  }

  ngOnInit()
  {
    this.name = contentData.basicdetail.name;
    this.aboutme = contentData.resumedetails.aboutme;
    this.designation = contentData.basicdetail.designation;

    if(this.contactDetails.length <=0 || this.contactDetails === null)
    {
      contentData.basicdetail.contactDetails.forEach(contact=>{
        this.contactDetails.push(contact)
      })

      this.contactDetails = this.contactDetails.slice(0,3)
    }

    if(this.interestsDetails.length <=0 || this.interestsDetails === null)
    {
      contentData.basicdetail.interests.forEach(interest=>{
        this.interestsDetails.push(interest)
      })
    }


  }
}
