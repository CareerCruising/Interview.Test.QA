import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-change-pictures',
  templateUrl: './change-pictures.component.html',
  styleUrls: ['./change-pictures.component.scss']
})
export class ChangePicturesComponent implements OnInit {

  currentAvatar = 0;
  currentCover = 0;

  constructor(public profile: ProfileService, private router: Router) { }

  ngOnInit() {
    this.currentAvatar = Math.max(0, this.profile.avatarOptions.findIndex(x => this.profile.avatarUrl === x));
  }

  close() {
    this.router.navigate(['about-me']);
  }

  saveChanges() {
    this.profile.avatarUrl = this.profile.avatarOptions[this.currentAvatar];
    this.profile.coverUrl = this.profile.coverOptions[this.currentCover];
    this.router.navigate(['about-me']);
  }

  changeProfilePicture(option: number) {
    this.currentAvatar = option;
  }

  changeCoverPicture(option: number) {
    this.currentCover = option;
  }

}
