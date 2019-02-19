import { $, ElementFinder, by, element } from 'protractor';

export class Pictures {

    public DefaultProfilePic: string;
    public DefaultBackgroundPic: string;

    constructor() {
        this.DefaultProfilePic = 'avatar-1.png';
        this.DefaultBackgroundPic = 'cover-1.png';
    }
}
