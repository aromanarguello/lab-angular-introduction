import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {


      img       = "https://media.giphy.com/media/MEvbm06UZv32w/giphy.gif";

      paragraph = `Series A financing ramen iteration twitter early adopters
                   investor analytics growth hacking. Lean startup long tail technology.
                   Analytics business-to-consumer twitter product management. Hypotheses
                   paradigm shift first mover advantage lean startup pitch return on
                   investment leverage focus monetization bandwidth long tail agile
                   development responsive web design. Facebook agile development marketing
                   incubator MVP.`

      title     = "Learn to code with Ironhack 💩"

  constructor() { }

  ngOnInit() {
  }

}
