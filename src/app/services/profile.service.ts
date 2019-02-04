import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  avatarUrl = '../../assets/images/avatar-3.png';
  coverUrl = '../../assets/images/cover-3.png';

  constructor() { }
}
