import { $, ElementFinder, by, element } from 'protractor';

export class HomePage {
    public AboutMe: ElementFinder;
    public ProfilePic: ElementFinder;
    public DefaultProfilePic: ElementFinder;
    public DefaultBackgroundPic: ElementFinder;
    public BackgroundPic: ElementFinder;
    public ChangePicturesButton: ElementFinder;


    constructor() {
        this.AboutMe = $("a.nav-link.active");
        this.ProfilePic = $("div.header-wrapper div.profile-pic img");
        this.BackgroundPic = element(by.xpath("//div[@class='jumbotron']"));
        this.DefaultProfilePic = element(by.xpath("//img[@src='../../assets/images/avatar-1.png']"));
        this.DefaultBackgroundPic = element(by.xpath("//img[@src='../../assets/images/cover-1.png']"));
        this.ChangePicturesButton = element(by.xpath("//div[@class='button']"));
    }

    // Methods or Functions

    async click_changePictures() {
        await this.ChangePicturesButton.click(); 

    }
}
