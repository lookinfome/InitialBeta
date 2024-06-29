import { Component, OnInit } from '@angular/core';
import contentData from '../../assets/content.json';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  name: string = "";
  aboutme: string = "";
  designation: string = "";
  isRec1Visible: boolean = true;

  showAboutMeButtonValue = "About Me";
  showAboutMe: boolean = true;


  contactDetails: {
    type: string,
    value: string,
    icon: string
  }[] = []

  educationDetails: {
    institution: string,
    degree: string,
    stream: string[],
    year: string,
    gradesystem: string,
    score: string,
    icon: string
  }[] = []

  interestsDetails: {
    interest: string,
    icon: string
  }[] = []


  /**
   * Utility Methods
   */

  toggleShowAboutMe() {
    this.showAboutMe = !this.showAboutMe;
    if (this.showAboutMe) {
      this.showAboutMeButtonValue = "About Me"
    } else {
      this.showAboutMeButtonValue = "Flip Back"
    }
  }

  EducationRecNext() {
    const rec1 = document.getElementById("graduation-content-box");
    const rec2 = document.getElementById("higher-secondary-content-box");
    const btnNext = document.getElementById("btn-next");
    const btnPrev = document.getElementById("btn-prev");
    if(this.isRec1Visible){
      rec1!.style.transform = "translateY(-100%)";
      rec2!.style.transform = "translateY(-100%)";
      (btnNext as HTMLButtonElement).disabled = true;
      (btnPrev as HTMLButtonElement).disabled = false;
      this.isRec1Visible = false;
    }
  }

  EducationRecPrev() {
    const rec1 = document.getElementById("graduation-content-box");
    const rec2 = document.getElementById("higher-secondary-content-box");
    const btnNext = document.getElementById("btn-next");
    const btnPrev = document.getElementById("btn-prev");
    if(!this.isRec1Visible){
      rec1!.style.transform = "translateY(0)";
      rec2!.style.transform = "translateY(100%)";
      (btnNext as HTMLButtonElement).disabled = false;
      (btnPrev as HTMLButtonElement).disabled = true;
      this.isRec1Visible = true;
    }
  }

  /**
   * Angular Hooks
   */

  ngOnInit() {
    this.name = contentData.basicdetail.name;
    this.aboutme = contentData.resumedetails.aboutme;
    this.designation = contentData.basicdetail.designation;


    if (this.contactDetails.length <= 0 || this.contactDetails === null) {
      contentData.basicdetail.contactDetails.forEach(contact => {
        this.contactDetails.push(contact)
      })

      this.contactDetails = this.contactDetails.slice(0, 3)
    }

    if (this.interestsDetails.length <= 0 || this.interestsDetails === null) {
      contentData.basicdetail.interests.forEach(interest => {
        this.interestsDetails.push(interest)
      })
    }

    if (this.educationDetails.length <= 0 || this.educationDetails === null) {
      contentData.resumedetails.educationdetails.forEach(record => {
        this.educationDetails.push(record);
      })
    }
  }
}
