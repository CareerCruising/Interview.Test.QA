# QA Interview Test

We are assuming you are familar with github. If you need help with running the website locally, give us a shout and we would be happy to assist.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Local Node Environment

Angular needs Node.js. Go to nodejs.org and download the latest version of Node.js

## Angular CLI

To set up, open the command prompt. Navigate to where the code is located. For example if you downloaded the code to C:\workspace\Interview.Test.QA, type:

cd C:\workspace\Interview.Test.QA

Next, run the following command:

npm install

## Running the site locally
In the same command window run the command:

npm start

The website will launch in your default browser with the url http://localhost:4200/

## Instructions for QA Automation Engineer
We are building a user profile section which will be a part of the larger web application. We currently only support the Google Chrome browser. The Product Owner has created a few user stories for the developer to follow when creating a couple of screens for the user profile section.

### QA Automation Guidelines
The Product Owner has created the requirements below for the developer to create a User Interface containing 2 screens and tasked the QA automation engineer with validating the finished product.


### UI Requirements sent to Developer
The UI Requirements that were sent to the developer are located in the sub folder Reqirements. You can also reach it via the link below: https://github.com/CareerCruising/Interview.Test.QA/blob/master/Requirements/Requirements%20for%20Developer%20-%20%20QA%20Automation%20Test.pdf

### What you need to do:
* Fork this repo
* Assuming you have successfully set up the front end repository which you will use to write E2E tests:
* Set yourself up with the automation framework of your choice. (We are using Cypress for our E2E testing)
* Add a folder with your name under AutomatedQAScripts, and that will be your working space during the interview.
* You are free to set up the structure of test suite under "AutomatedQAScripts" before coming to the interview process.
* During interview process you will be asked to write an E2E test for a specific scenario.
* At the end of invterview, you should create a branch in Github and push your changes to Github.
