const aboutMePage = require('../pages/aboutMe.page')
const changePicPage = require('../pages/changePicture.page')
const assert = require('chai').assert

suite("'Change Pictures' page validation",function(){

    setup("Open Change pictures page in Xello", function(){
      browser.url('/')
      aboutMePage.clickChangePicture()
      changePicPage.hasLoaded()
    })

    test("Verify that user is on 'Change pictures' page", function(){
        assert.include(browser.getUrl(), 'change-pictures') 
    })

    test("Verify that user is able to change the default profile and background image", function(){
        changePicPage.selectNewPictures('avatar-2', 'cover-2')
        changePicPage.clickSaveButton()
        aboutMePage.verifyProPic('avatar-2')
        aboutMePage.verifyBackgroundPic('cover-2')
        
    })

    test("Verify that avatar-1 and cover-1 is selected by default", function(){
        changePicPage.verifyPicturesSelected('avatar-1', 'cover-1')
    })

    test("Verify that 'Save' and 'Cancel' buttons are displayed in 'Change Pictures' page", function(){
        changePicPage.saveButton.isEnabled()
        changePicPage.cancelButton.isEnabled()
    })

    test("Verify that page title is 'Change Pictures'", function(){
        //Defect -Page title is QA Test
        assert.equal(browser.getTitle(),"Change Pictures")
    })

    test("Verify that 'Cancel' button ignores all the updates made", function(){
        changePicPage.selectNewPictures('avatar-1', 'cover-1')
        changePicPage.clickSaveButton()

        aboutMePage.changePictureBtn.click()
        changePicPage.selectNewPictures('avatar-2', 'cover-2')
        changePicPage.clickCancelButton()

        aboutMePage.clickOnAboutMe()
        aboutMePage.verifyProPic('avatar-1')
        aboutMePage.verifyBackgroundPic('cover-1')
        
    })

    test("Verify the pictures selected are retained upon saving", function(){
        //Defect - cover-1 is always selected by default even if new cover pictures are selected
        changePicPage.selectNewPictures('avatar-2', 'cover-2')
        changePicPage.clickSaveButton()

        aboutMePage.changePictureBtn.click()
        changePicPage.verifyPicturesSelected('avatar-2', 'cover-2')
    })
    
})