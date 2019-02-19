const { BeforeAll, Before,  After, AfterAll, Status } = require('cucumber');
import { browser } from 'protractor';


BeforeAll({timeout: 100 * 1000}, async () => {

});

Before({timeout: 100 * 1000}, async () => {
    await browser.get(browser.baseUrl);
});

After({timeout: 100 * 1000}, async function(scenario) {

    if (scenario.result.status === Status.FAILED) {
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, 'image/png');
    }
});

AfterAll({timeout: 100 * 1000}, async () => {

    // Close all opened browsers
    await browser.quit();
});
