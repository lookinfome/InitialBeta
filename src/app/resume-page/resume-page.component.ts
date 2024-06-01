import { Component } from '@angular/core';
import contentData from '../../assets/content.json';


@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {


  name: string = "";

  interests: {
    interest: string,
    icon: string
  }[] = [];

  languages: {
    name: string,
    icon: string
  }[] = [];

  skillsets: {
    category: string,
    skills: {
      name: string,
      icon: string
    }[]
  }[] = [];

  contactDetails: {
    type: string,
    value: string,
    icon: string
  }[]=[]

  experiencesDetails:{
    company: string,
    designation: string,
    time: string,
    location: string,
    workdetail: {
      pointers: {
        category: string,
        description: string,
        responsibilities: string[]
      }[]
    }
  }[]=[]


  // Function to extract class names
  extractClassNames(iconHtml: string): string {
    const div = document.createElement('div');
    div.innerHTML = iconHtml;
    const iconElement = div.querySelector('i');
    return iconElement ? iconElement.className : '';
  }


  ngOnInit()
  {
    /**
     * Name
     */

    this.name = contentData.basicdetail.name;

    /**
     * Populating the interests array
     */
    contentData.basicdetail.interests.forEach(interest=>{

      this.interests.push(
        {
          interest: interest.interest,
          icon: interest.icon
        }
      )
    });

    /**
     * Populating the languages array
     */

    contentData.basicdetail.languages.forEach(language=>{

      this.languages.push(
        {
          name: language.name,
          icon: language.icon
        }
      )
    })

    /**
     * Populating the skillsets array
     */

    contentData.resumedetails.skillset.forEach(record=>{
      this.skillsets.push({
        category: record.category,
        skills: record.skills
      })
    })

    /**
     * Populating the contactlist array
     */

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

      this.contactDetails = this.contactDetails.slice(0,3)
    }

    /**
     * Populating the experiencesdetails array
     */

    if(this.experiencesDetails.length <=0 || this.experiencesDetails === null){
      contentData.resumedetails.experiences.forEach(record=>{
        this.experiencesDetails.push(record);
      })
    }


  }
}
