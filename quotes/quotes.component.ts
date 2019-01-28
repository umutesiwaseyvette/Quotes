import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes= [
    new Quote("","People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily","hhhhh"),
    new Quote("","If you cannot do great things, do small things in a great way","hhhhh"),
    new Quote("","Your time is limited, so don't waste it living someone else's life","ggggg"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
