import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-change-pictures',
  templateUrl: './change-pictures.component.html',
  styleUrls: ['./change-pictures.component.scss']
})
export class ChangePicturesComponent implements OnInit {

  baseUrl = '../../assets/images/';
  avatarOptions = ['avatar-1.png', 'avatar-2.png', 'avatar-3.png'];
  coverOptions = ['cover-1.png', 'cover-2.png', 'cover-3.png'];

  constructor(public profile: ProfileService, private router: Router) { }

  ngOnInit() {
  }

  saveChanges() {
    this.router.navigate(['about-me']);
  }

  changeProfilePicture(option: string) {
    this.profile.avatarUrl = this.baseUrl + option;
  }

  changeCoverPicture(option: string) {
    this.profile.coverUrl = this.baseUrl + option;
  }

}
