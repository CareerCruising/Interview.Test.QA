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

let selectedProfilePic;
let selectedBackgroundpic;
let changedProfilePic;
let changedBackgroundpic;

When(/^I click Cancel button$/, async () => {
    await editPage.click_cancelBUtton();
    
});

When(/^I click Save button$/, async () => {
    await editPage.click_saveBUtton();
    
}); 

Then(/^I am on home page$/, async () => {
    // Verify text displayed
    expect(homePage.AboutMe.getText()).to.eventually.equal('About Me');
    
}); 

Given(/^I store selected profile and background images$/, async () => {
    
    await homePage.ProfilePic.getAttribute("src").then(function(value) {
        selectedProfilePic = value;
    });

    await homePage.BackgroundPic.getAttribute("src").then(function(value) {
        selectedBackgroundpic = value;
    });     
    
});

When(/^I selected "(.*?)" and "(.*?)"$/, async (profilePic: string, backgoundPic: string) => {
    
    switch (profilePic) {
        case 'ProfilePic2': {
            await editPage.ProfilePic2.click();
            await editPage.ProfilePic2.getAttribute("src").then(function(value) {
                changedProfilePic = value;
            });
            break;
        } 
        case 'ProfilePic3': {
            await editPage.ProfilePic3.click();
            await editPage.ProfilePic3.getAttribute("src").then(function(value) {
                changedProfilePic = value;
            });
            break;
        } 
        case 'DefaultProfilePic': {
            await editPage.DefaultProfilePic.click();
            await editPage.DefaultProfilePic.getAttribute("src").then(function(value) {
                changedProfilePic = value;
            });
            break;
        } 
        default: {
            await editPage.DefaultProfilePic.getAttribute("src").then(function(value) {
                changedProfilePic = value;
            });
           break; 
        } 
     } 

     switch (backgoundPic) {
        case 'BackgoundPic2': {
            await editPage.BackgroundPic2.click();
            await editPage.BackgroundPic2.getAttribute("src").then(function(value) {
                  changedBackgroundpic = value;
            });
            break;
        } 
        case 'BackgoundPic3': {
            await editPage.BackgroundPic3.click();
            await editPage.BackgroundPic3.getAttribute("src").then(function(value) {
                changedBackgroundpic = value;
            });
            break;
        } 
        case 'DefaultBackgroundPic': {
            await editPage.DefaultBackgroundPic.click();
            await editPage.DefaultBackgroundPic.getAttribute("src").then(function(value) {
                changedBackgroundpic = value;
            });
            break;
        }
        default: {
            await editPage.DefaultBackgroundPic.getAttribute("src").then(function(value) {
                changedBackgroundpic = value;
            });
           break; 
        } 
     }     
    
}); 

Then(/^previously selected profile and background images are displayed$/, async () => {
    
    // Verify 

    await expect(homePage.ProfilePic.getAttribute("src")).to.eventually.equal(selectedProfilePic);

    await expect(homePage.BackgroundPic.getAttribute("src")).to.eventually.equal(selectedBackgroundpic);
    
}); 

Then(/^selected profile and background images are displayed$/, async () => {
    
    // Verify 

    await expect(homePage.ProfilePic.getAttribute("src")).to.eventually.equal(changedProfilePic);

    // await expect(homePage.BackgroundPic.getAttribute("src")).to.eventually.equal(changedBackgroundpic);
    // Can come with better approach 
    await homePage.BackgroundPic.getAttribute("style").then(function(value) {
        expect(value).to.include(changedBackgroundpic.substr(-15, 12));
    });
}); 

Then(/^selected "(.*?)" and "(.*?)" images are defaulted$/, async (profilePic: string, backgoundPic: string) => {
    
    // Verify 

    switch (profilePic) {
        case 'ProfilePic2': {
            await expect(editPage.ProfilePic2.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        } 
        case 'ProfilePic3': {
            await expect(editPage.ProfilePic3.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        } 
        case 'DefaultProfilePic': {
            await expect(editPage.DefaultProfilePic.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        } 
        default: {
            await expect(editPage.DefaultProfilePic.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
           break; 
        } 
     } 

     switch (backgoundPic) {
        case 'BackgoundPic2': {
            await expect(editPage.BackgroundPic2.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        } 
        case 'BackgoundPic3': {
            await expect(editPage.BackgroundPic3.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        } 
        case 'DefaultBackgroundPic': {
            await expect(editPage.DefaultBackgroundPic.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        }
        default: {
            await expect(editPage.DefaultBackgroundPic.getWebElement().findElement(by.xpath('..'))
                    .getAttribute('class')).to.eventually.equal('tile-button active');
            break;
        } 
     }     
}); 


 
