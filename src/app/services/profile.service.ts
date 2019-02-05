import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  avatarUrl = '';
  coverUrl = '';

  baseUrl = '../../assets/images/';
  avatarOptions = ['avatar-1.png', 'avatar-2.png', 'avatar-3.png'];
  coverOptions = ['cover-1.png', 'cover-2.png', 'cover-3.png'];

  constructor() { }
}
