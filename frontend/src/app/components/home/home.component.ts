import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Title Here";
  body = "Description Here"

  constructor() { }

  ngOnInit(): void {
  }

}
