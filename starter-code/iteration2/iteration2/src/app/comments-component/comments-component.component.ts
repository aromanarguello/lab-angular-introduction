import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  commentTitle = "Comments"

  myComments: any[] = [
    {
      comment: `Bootstrapping long tail seed round branding incubator
                ramen supply chain beta return on investment success
                deployment buzz gen-z startup.`,
      authorName: "Alejandro"
    },
    {
      comment: `Client churn rate android iteration user experience.
                Direct mailing gamification research & development buzz
                angel investor business-to-consumer channels scrum project
                interaction design business plan lean startup pivot.`,
      authorName: "Pedro"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
