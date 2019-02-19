import { $, ElementFinder, by, element } from 'protractor';

export class EditPage {

    public DefaultProfilePic: ElementFinder;
    public DefaultBackgroundPic: ElementFinder;
    public ChangePicturesButton: ElementFinder;
    public ProfilePic2: ElementFinder;
    public BackgroundPic2: ElementFinder;
    public ProfilePic3: ElementFinder;
    public BackgroundPic3: ElementFinder;
    public SaveButton: ElementFinder;
    public CancelButton: ElementFinder;
    public PageTitle: ElementFinder;


    constructor() {
        this.DefaultProfilePic = element(by.xpath("//img[@src='../../assets/images/avatar-1.png']"));
        this.DefaultBackgroundPic = element(by.xpath("//img[@src='../../assets/images/cover-1.png']"));
        this.ProfilePic2 = element(by.xpath("//img[@src='../../assets/images/avatar-2.png']"));
        this.BackgroundPic2 = element(by.xpath("//img[@src='../../assets/images/cover-2.png']"));
        this.ProfilePic3 = element(by.xpath("//img[@src='../../assets/images/avatar-3.png']"));
        this.BackgroundPic3 = element(by.xpath("//img[@src='../../assets/images/cover-3.png']"));
        this.ChangePicturesButton = element(by.xpath("//div[@class='button']"));
        this.CancelButton = element(by.xpath("//div[contains(text(),'Cancel')]"));
        this.SaveButton = element(by.xpath(" //button[contains(text(),'Save')]"));
        this.PageTitle = element(by.xpath("//h1"));
       
    }

    // Methods or Functions

    async click_cancelBUtton() {
        await this.CancelButton.click();

    }

    async click_saveBUtton() {
        await this.SaveButton.click();

    }
}
