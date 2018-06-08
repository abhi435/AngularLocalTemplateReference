import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Gift } from '../gift/gift.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginSuccessMsg = 'Congrats! You have logged in successfully!'
  userRating = 5;
  userGiftStatus: boolean = false;
  userGiftClaimed: boolean = false;
  userGiftMsg = 'Gift not claimed yet!';
  userComment = 'Sample Message';
  userGiftName = '';
  giftCount: number = 0;
  @ViewChild('nickName') nickName : ElementRef;
  userNickName: String = '';
  
  gifts = [{giftName: 'Toaster'}];
  
  constructor() {
    this.updateUserGiftStatus();
  }

  ngOnInit() {
  }

  getUserRating() {
    return this.userRating;
  }

  updateUserGiftStatus() {
    if (this.userRating == 5) {
      this.userGiftStatus = true;
    }
  }

  getStatusTextColor() {
    return this.userGiftClaimed ? 'green' : 'red'; 
  }

  onAddGift(giftName: HTMLInputElement) {
    this.userGiftName = giftName.value;

    if (this.userGiftName == '') {
      this.userGiftMsg='Gift name cannot be blank';
      return;
    }
    
    this.gifts.push({
      giftName: this.userGiftName
    });

    this.userNickName = this.nickName.nativeElement.value;
    alert('Thanks '+ this.userNickName + '. We truly admire your choice.');
    
  }

  onGiftClaim (count) {
    this.giftCount = count;
  }
  
}