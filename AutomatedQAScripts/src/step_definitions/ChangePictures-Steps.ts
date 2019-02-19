import { Given, Then, When } from "cucumber";
import { browser, by } from "protractor";
import { HomePage} from "../pages/HomePage";
import { EditPage} from "../pages/EditPage";
import { Pictures } from "../pages/Pictures";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePage: HomePage = new HomePage();
const editPage: EditPage = new EditPage();
const pictures: Pictures = new Pictures();

Given(/^I am in edit page$/, async () => {

    // go to edit page
    await homePage.click_changePictures();

     // Verify edit page
     await expect(browser.getCurrentUrl()).to.eventually.equal(browser.baseUrl + "change-pictures", "Incorrect URL: Verify navigation");
});

Then(/^default profile image is selected$/, async () => {

    // Verify default image is active
    await expect(editPage.DefaultProfilePic.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
});

Then(/^default backgound image is selected$/, async () => {

    // Verify default image is active
    await expect(editPage.DefaultBackgroundPic.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
}); 

Then(/^no other profile images are not selected$/, async () => {

    // Verify no other image is active
    await expect(editPage.ProfilePic2.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.not.equal('tile-button active');
    await expect(editPage.ProfilePic3.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.not.equal('tile-button active');
}); 

Then(/^no other backgound images are selected$/, async () => {

    // Verify no other image is active
    await expect(editPage.BackgroundPic2.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.not.equal('tile-button active');
    await expect(editPage.BackgroundPic3.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.not.equal('tile-button active');
});

Then(/^Cancel button is displayed on the page$/, async () => {

    // Verify
    await expect(editPage.CancelButton.isDisplayed()).to.eventually.equal(true);
});

Then(/^Save button is displayed on the page$/, async () => {

    // Verify
    await expect(editPage.SaveButton.isDisplayed()).to.eventually.equal(true);
});

Then(/^The title of the page is "(.*?)"$/, async (title: string) => {

   // Verify text displayed
    await expect(editPage.PageTitle.getText()).to.eventually.equal(title);
});


