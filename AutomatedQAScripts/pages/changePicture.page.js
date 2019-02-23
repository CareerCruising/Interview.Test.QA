const assert = require('chai').assert
const aboutMePage = require('./aboutMe.page')
let avatarName, coverName

class ChangePicture {

    get changePictureContainer()        {return $('app-change-pictures')}
    get avatar()                        { return $(`.tile-button img[src*="${avatarName}"]`) }
    get cover()                         {return $(`img[src*="${coverName}"]`)}
    
    get avatar1()                   {return $('.tile-button img[src*="avatar-1"]')}
    get cover1()                    {return $('img[src*="cover-1"]')}
    get saveButton()                {return $('div .button')}
    get cancelButton()              {return $('//div[contains(text(),"Cancel")]')}    
    get pictureSections()           { return $$('app-change-pictures .tile-list')} 

    hasLoaded() {
        this.changePictureContainer.waitForVisible()
    }

    selectNewPictures(avatar, cover) {
        avatarName = avatar
        coverName = cover
        this.avatar.click()
        this.cover.click()
    }

    clickSaveButton() {
        this.saveButton.click()
        aboutMePage.hasLoaded()
    }

    clickCancelButton() {
        this.cancelButton.click()
    }

    verifyProPic(avatar) {
        assert.include(this.profilePicture.getAttribute('src'), avatar, "Displayed profile pic is incorrect")
    }

    verifyBackgroundPic(cover) {
        assert.include(this.backgroundImage.getAttribute('style'), cover, "Displayed background pic is incorrect")
    }

    verifyPicturesSelected(avatar, cover) {
        assert.include(this.pictureSections[0].$('.tile-button.active img').getAttribute('src'), avatar, "Incoreect avatar selected")
        assert.include(this.pictureSections[1].$('.tile-button.active img').getAttribute('src'), cover, "Incorrect cover selected")
    }

}

module.exports = new ChangePicture();