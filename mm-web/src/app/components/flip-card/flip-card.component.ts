import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, } from '@angular/core';
import FlipCardInterface from 'src/app/interfaces/flip-card.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit, OnDestroy {
  @Input() card: FlipCardInterface;
  @Input() type: string;
  @Output() flip: EventEmitter<any> = new EventEmitter();
  @Input() closer: Observable<any>;
  @Input() onResult: Observable<any>;
  private subscriptions: Subscription;
  flipped = false;

  constructor() { }

  ngOnInit() {
    this.subscriptions = this.onResult.subscribe((data) => {
      if (data && data.open) {
        if (this.type === data.open) {
          this.flipped = true;
        } else {
          this.flipped = false;
        }
      } else {
        this.showResult(data);
      }
    });
  }

  close() {
    return true;
  }

  onClick() {
    this.flip.emit(this.type);
  }

  showResult(data: any) {
    // TODO: Manage proper event chards to change the specific result
    if (this.type === 'identical') {
      this.card.result = data.identical || '';
    }

    if (this.type === 'sorted') {
      this.card.result = data.sorted || '';
    }

    if (this.type === 'balance') {
      this.card.result = data.balance || '';
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
