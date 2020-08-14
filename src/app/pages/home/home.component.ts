import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus ligula aLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus ligula a ornare tincidunt.';

  constructor() { }

  ngOnInit(): void {
  }

}
