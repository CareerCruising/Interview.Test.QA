import * as path from 'path';
import { browser, Config } from 'protractor';
import { Reporter } from '../support/reporter';
const jsonReports = process.cwd() + '/reports/json';

export const config: Config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: 'http://localhost:4200/',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // args: [ "--headless", "--disable-gpu", "--window-size=1024,768" ]
          }
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../src/features/**/**/*.feature',
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        format: 'json:./reports/json/cucumber_report.json',
        require: ['../step_definitions/*.js', '../support/*.js'],
        strict: true,
        tags: ['@demo', '~@ignore'],
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
