const aboutMePage = require('../pages/aboutMe.page')
const changePicPage = require('../pages/changePicture.page')
const assert = require('chai').assert

suite("Home page validation",function(){
    suiteSetup("Open Xello home page", function(){
        browser.url('/')
    })

    test("Verify that by default , Home-page is 'About me' page", function(){
        aboutMePage.hasLoaded()
        assert.equal(browser.getUrl(),'http://localhost:4200/about-me')
    })

    test("Verify that home page title is 'About me'", function(){
        //The page title is not About me
        assert.equal(browser.getTitle(),"About me", "The title of the page is incorrect")
    })
    
    test("Verify user is redirected to AbouMe page when clicked on About Me in Nav bar", function(){
        aboutMePage.clickOnAboutMe()
        assert.include(browser.getUrl(),'/about-me')
    })

    test("Verify the default profile picture is avatar1", function() {
        assert.include(aboutMePage.profilePicture.getAttribute('src'), 'avatar-1')
    })

    test("Verify the default background image is displayed", function() {
        //This is a defect as currently there is no default background 
        assert.include(aboutMePage.backgroundImage.getAttribute('url'), 'cover-1', "Incorrect default cover displayed")
    })

    test("Clicking on Change picture buttons redirects to Edit profile page", function() {
        //There is an amiguity in the requirement, this test is assuming the user is redirected to 
        //change pictures page
        aboutMePage.clickChangePicture()
        changePicPage.hasLoaded() 
    })
})