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
    this.currentAvatar = this.profile.avatarOptions.findIndex(x => this.profile.avatarUrl.indexOf(x) !== -1);
  }

  saveChanges() {
    this.router.navigate(['about-me']);
  }

  changeProfilePicture(option: string) {
    this.profile.avatarUrl = option;
    this.currentAvatar = this.profile.avatarOptions.findIndex(x => this.profile.coverUrl.indexOf(x) !== -1);
  }

  changeCoverPicture(option: string) {
    this.profile.coverUrl = option;
    this.currentCover = this.profile.coverOptions.findIndex(x => this.profile.coverUrl.indexOf(x) !== -1);
  }

}
