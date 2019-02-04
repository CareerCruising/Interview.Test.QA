import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  avatarUrl = '../../assets/images/avatar-1.png';
  coverUrl = '../../assets/images/cover-1.png';

  constructor() { }
}
