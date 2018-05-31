import { Component, OnInit } from '@angular/core';
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

  onAddGift() {
    if (this.userGiftName == '') {
      this.userGiftMsg='Gift name cannot be blank';
      return;
    }
    
    this.gifts.push({
      giftName: this.userGiftName
    });
    
  }

  onGiftClaim (count) {
    this.giftCount = count;
  }
  
}