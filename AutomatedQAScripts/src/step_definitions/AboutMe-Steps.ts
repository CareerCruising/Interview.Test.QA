import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { HomePage} from "../pages/HomePage";
import { Pictures } from "../pages/Pictures";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePage: HomePage = new HomePage();
const pictures: Pictures = new Pictures();

Given(/^I am in About me page$/, async () => {

    // Verify title of the page
    expect(browser.getTitle()).to.eventually.equal('QA Test');
});

Then(/^"(.*?)" section is displayed on page$/, async (title: string) => {

    // Verify text displayed
    expect(homePage.AboutMe.getText()).to.eventually.equal(title);
});

Given(/^no image is selected$/, async () => {

    // As no image is selected at this point no steps to do
});

Then(/^a default image is displayed$/, async () => {

    // Verify profile pic displayed with default image as no image selected
    await homePage.ProfilePic.getAttribute("src").then(function(value) {
        expect(value).to.include(pictures.DefaultProfilePic);
    });

    // Verify defaul pic from edit page
    // expect(homePage.DefaultProfilePic.getAttribute("src")).to.eventually.equal(homePage.ProfilePic.getAttribute("src"));
});

Given(/^no background image is selected$/, async () => {

    // As no image is selected at this point no steps to do
});

Then(/^a default background image is displayed$/, async () => {

    // Verify profile pic displayed with default image as no image selected
    await homePage.BackgroundPic.getAttribute("src").then(function(value) {
        expect(value).to.include(pictures.DefaultBackgroundPic);
    });
    // await expect(homePage.DefaultBackgroundPic.getAttribute("src")).to.eventually.equal(obj.BackgroundPic.getAttribute("src"));
});

Then(/^A clickable button Change Pictures is displayed$/, async () => {

    // Verify button displayed
    await expect(homePage.ChangePicturesButton.isDisplayed()).to.eventually.equal(true);

    // Verify button is clickable
    await expect(homePage.ChangePicturesButton.getAttribute('class')).to.eventually.equal('button');
});

When(/^I click button Change Pictures$/, async () => {

    // Verify profile pic displayed with default image as no image selected
    await homePage.click_changePictures();
});

Then(/^I am directed to edit page$/, async () => {

    // Verify url to check navigation to edit page
    await expect(browser.getCurrentUrl()).to.eventually.equal(browser.baseUrl + "change-pictures", "Incorrect URL: Verify navigation");
});





