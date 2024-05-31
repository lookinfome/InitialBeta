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

  }
}
