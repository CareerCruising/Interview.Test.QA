# QA Interview Test

We are assuming you are familar with github. If you need help with running the website locally, give us a shout and we would be happy to assist.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Local Node Environment

Angular needs Node.js. Go to nodejs.org and download the latest version of Node.js

## Angular CLI

To install the Angular CLI version 6.1.1, open the command prompt. Navigate to where the code is located. For example if you downloaded the code to C:\workspace\Interview.Test.QA, type cd C:\workspace\Interview.Test.QA
next run the command npm install @angular/cli@6.1.1

## Running the site locally
In the same command window run the command 
ng serve --open
The website will launch in your deafault browser with the url http://localhost:4200/

## Instructions for QA Automation Engineer
We are building a user profile section which will be a part of the larger web application. We currently only support the Google Chrome browser. The Product Owner has created a few user stories for the developer to follow when creating a couple of screens for the user profile section.

### QA Automation Guidelines
The Product Owner has created the requirements below for the developer to create a User Interface containing 2 screens and tasked the QA automation engineer with validating the finished product.

You are required to create a set of automated tests using a framework of your choice based on the requirements listed below.  
There are defects as well as requirements that were possibly missed by the developer. You are free to use any defect template of your choice to log any defects you find. We will be evaluating the way your tests are written for cleanliness and reuse.
We expect the task to take no more than 2 hours to complete, however you are not required to stick to this limit.

### UI Requirements sent to Developer
The UI Requirements that were sent to the developer are located in the sub folder Reqirements. You can also reach it via the link below: https://github.com/CareerCruising/Interview.Test.QA/blob/master/Requirements/Requirements%20for%20Developer%20-%20%20QA%20Automation%20Test.pdf

### What you need to do:
* Fork this repo
* Create your automated tests using a scripting tool of your choice
* Add your scripts to the folder AutomatedQAScripts in the repo
* Create a pull request against the master branch
* Provide us with a list of defects you have identified
* Provide us with your test code - scenarios should include “happy path” tests as well as tests that identify defects in the code and fail in the appropriate spot 
* You will provide us with the steps required to install and run your automation tests, including any necessary tools and frameworks
* You should create a branch in Github and push your changes to Github

### Bonus requirements
* Identify any accessibility (WCAG) issues with the screens
* Feel free to share your thoughts on the definition and contents of the user stories as that feedback would be a bonus

