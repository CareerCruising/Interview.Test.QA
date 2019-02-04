import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public profile: ProfileService, private router: Router) { }

  ngOnInit() {
  }

  changePictures() {
    this.router.navigate(['change-pictures']);
  }

}
