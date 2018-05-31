import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})

export class Gift {
  giftCount = 0;
  claimBtnDisable:boolean = false;

  @Input('giftElement') element: {giftName: string};
  @Input() count: number;
  @Output() giftClaimed = new EventEmitter<Number>();

  onGiftClaim() {
    this.giftCount = this.count;
    this.giftCount = this.giftCount + 1;
    this.giftClaimed.emit(this.giftCount);
    this.claimBtnDisable=true;
  }
}