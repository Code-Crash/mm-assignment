import { Component, OnInit } from '@angular/core';
import CARD_DATA from '../../sample/data';
import FlipCardInterface from 'src/app/interfaces/flip-card.interface';
import { ApiService } from 'src/app/services/api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identical: FlipCardInterface = CARD_DATA.find((item) => item.type === 'identical');
  sorted: FlipCardInterface = CARD_DATA.find((item) => item.type === 'sorted');
  balance: FlipCardInterface = CARD_DATA.find((item) => item.type === 'balance');
  subjects: Subject<void> = new Subject<void>();

  constructor(private service: ApiService) { }

  ngOnInit() { }

  process(type: string) {
    switch (type) {
      case 'identical':
        this.cardOpener({ open: 'identical' });
        this.getIdentical(this.identical.input.first, this.identical.input.second);
        break;
      case 'sorted':
        this.cardOpener({ open: 'sorted' });
        this.getSorted(this.sorted.input);
        break;
      case 'balance':
        this.cardOpener({ open: 'balance' });
        this.getBalance(this.balance.input);
        break;
      default:
        console.log('case does not match.');
    }
  }

  cardOpener(type: any) {
    this.subjects.next(type);
  }

  showResultToChild(data: any) {
    this.subjects.next(data);
  }

  getIdentical = (first: number[], second: number[]) => {
    this.service.identical(first, second).subscribe((data) => {
      this.showResultToChild({ identical: data.result || [] });
    });
  }

  getSorted = (array: number[]) => {
    this.service.sorted(array).subscribe((data) => {
      this.showResultToChild({ sorted: data.result || [] });
    });
  }

  getBalance = (array: number[]) => {
    this.service.balance(array).subscribe((data) => {
      this.showResultToChild({ balance: data.result || [] });
    });
  }
}

