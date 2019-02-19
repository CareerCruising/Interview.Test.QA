@demo
Feature: Change Pictures

   As a User
   I would like to be able to change their default picture and background image
   So that I can save them

Scenario: When the page is loaded the first time, the default profile image is selected
    Given  I am in edit page
    Then default profile image is selected

Scenario: When the page is loaded the first time, the no other image is selected other than default image 
    Given  I am in edit page
    Then no other profile images are not selected

Scenario: When the page is loaded the first time, the default background image is selected
    Given  I am in edit page
    Then default backgound image is selected

Scenario: When the page is loaded the first time, the no other image is selected other than default background image 
    Given  I am in edit page
    Then no other backgound images are selected

Scenario: 2 buttons are visible cancel and save
    Given  I am in edit page
    Then Cancel button is displayed on the page
    And Save button is displayed on the page

Scenario: The title of the page is “Change Pictures”
    Given  I am in edit page
    Then The title of the page is "Change Pictures"