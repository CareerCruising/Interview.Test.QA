@demo
Feature: User Profile Displayed

In order to edit my profile
As a registered user 
I would like to view my Profile Page and navigate to edit page


Scenario: A menu titled “About Me” is displayed
    Given I am in About me page
    Then "About Me" section is displayed on page

Scenario: A default image is displayed when no image selected
    Given I am in About me page
    And no image is selected
    Then a default image is displayed

Scenario: A default background image is displayed when no background image selected
    Given I am in About me page
    And no background image is selected
    Then a default background image is displayed

Scenario: A clickable button [Change Pictures] displayed on page
    Given I am in About me page
    Then A clickable button Change Pictures is displayed

Scenario: A clickable button [Change Pictures] loads the Edit page
    Given I am in About me page
    When  I click button Change Pictures
    Then I am directed to edit page

