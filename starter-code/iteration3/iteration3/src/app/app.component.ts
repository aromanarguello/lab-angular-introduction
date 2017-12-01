import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  championsips: any[] = [
    {
      yearOfchampionship: "2017",
      championshipTeam: "Golden State Warriors",
      championshipUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0HT7ZaNlPnQxQlORQKFHxr9ccL4p4F34qhJRUJ-ipZCdwP5g",
    },
    {
      yearOfchampionship: "2016",
      championshipTeam: "Cleveland Cavaliers",
      championshipUrl: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png",
    },
    {
      yearOfchampionship: "2015",
      championshipTeam: "Golden State Warriors",
      championshipUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0HT7ZaNlPnQxQlORQKFHxr9ccL4p4F34qhJRUJ-ipZCdwP5g",
    }
  ];

  bestPlayers: any[] = [
    {
      team: "Golden State Warriors",
      players: [ "Stephen Curry", "Kay Thompson", "Draymong Green", "Andre Bogut"]
    },
    {
      team: "Cleveland Cavaliers",
      players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith"]
    }
  ];

}
