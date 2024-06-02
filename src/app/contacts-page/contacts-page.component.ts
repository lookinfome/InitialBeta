import { Component } from '@angular/core';
import contentData from '../../assets/content.json';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})



export class ContactsPageComponent {

  contactDetailsInfo: {
    type: string,
    value: string,
    icon: string,
    passage: string,
    button: string,
    boxcolor: string
  }[] = []

  ngOnInit(){
    if (this.contactDetailsInfo.length <= 0 || this.contactDetailsInfo === null)
      {
        contentData.basicdetail.contactDetails.forEach(record=>{

          switch (record.type.toLowerCase())
          {
            case "linkedin":
              this.contactDetailsInfo.push({
                type: record.type,
                value: record.value,
                icon: "../../assets/linkedin.png",
                passage: "Connect with me on LinkedIn and let's grow our networks!",
                button: "I am here",
                boxcolor: ""
              })
            break;

            case "instagram":
              this.contactDetailsInfo.push({
                type: record.type,
                value: record.value,
                icon: "../../assets/instagram.png",
                passage: "Wanna smile in your dark days, I share dark memes btw.",
                button: "Lookin' for me",
                boxcolor: ""
              })
            break;

            case "twitter":
              this.contactDetailsInfo.push({
                type: record.type,
                value: record.value,
                icon: "../../assets/twitter.png",
                passage: "TBH I don't tweet much, but trust me I am there!",
                button: "Follow this button",
                boxcolor: "10px 10px 10px #0077B5"
              })
            break;

            case "github":
              this.contactDetailsInfo.push({
                type: record.type,
                value: record.value,
                icon: "../../assets/github.png",
                passage: "Let's crush those damn bugs together, or crush those bugs!",
                button: "Hop on buddy",
                boxcolor: ""
              })
            break;

            default: break;
          }

        })

      }
  }


}
