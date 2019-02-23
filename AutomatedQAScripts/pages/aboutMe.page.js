const assert = require('chai').assert

class AboutMe {

    get appHeader()                     {return $('app-profile .header-wrapper')}
    get aboutMeButton()                 {return $('a[href*="about-me"]')}
    get profilePicture()                {return $('.header-wrapper .profile-pic img')}
    get backgroundImage()               {return $('.jumbotron[style*="background-image"]')}
    get changePictureBtn()              {return $('.jumbotron .button')}

    hasLoaded() {
        this.appHeader.waitForVisible()
    }

    clickOnAboutMe() {
        this.aboutMeButton.click()
    }

    clickChangePicture() {
        this.changePictureBtn.click()
    } 

    verifyProPic(avatar) {
        assert.include(this.profilePicture.getAttribute('src'), avatar, "Displayed profile pic is incorrect")
    }

    verifyBackgroundPic(cover) {
        assert.include(this.backgroundImage.getAttribute('style'), cover, "Displayed background pic is incorrect")
    }
}

module.exports = new AboutMe();