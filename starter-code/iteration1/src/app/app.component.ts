import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myGifs: any[] = [
    {
      title: "Cartman",
      gifUrl: "https://media.giphy.com/media/NaxKt9aSzAspO/giphy.gif"
    },
    {
      title: "Cartman with money",
      gifUrl: "https://media.giphy.com/media/13TJrRNMTIn9G8/giphy.gif"
    },
    {
      title: "Cool Cartman",
      gifUrl: "https://media.giphy.com/media/3o85xt08p2Y0hanhwQ/giphy.gif"
    }
  ];

  title = 'Alejandro!';
}
