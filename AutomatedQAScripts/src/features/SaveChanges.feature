@demo
Feature: Save Changes

    As a User
    I would like to be able to save or cancel the changes made to default picture and background image
    So that I can see them on my profile About Me section

    # Scenario: 2 buttons are visible on the top of the screen. Cancel and Save. A title “Change Pictures” is visible
    # Covered in previous feature file

    
    Scenario: When the Cancel button is clicked, any changes are ignored. The home page is loaded
        Given I am in edit page
        When I click Cancel button
        Then I am on home page
        

    Scenario Outline: When the Cancel button is clicked then previously selected profile and background images are displayed
        Given I store selected profile and background images
        And I am in edit page
        When I selected "<profilePic>" and "<backgoundPic>"
        And I click Cancel button
        Then I am on home page
        And previously selected profile and background images are displayed

        Examples:
            | profilePic        | backgoundPic         |
            | ProfilePic2       | BackgoundPic2        |
            | ProfilePic3       | BackgoundPic3        |
            |                   | BackgoundPic2        |
            | ProfilePic3       |                      |
            | ProfilePic2       |                      |
            |                   | BackgoundPic3        |
            | DefaultProfilePic |                      |
            |                   | DefaultBackgroundPic |
            | DefaultProfilePic | BackgoundPic3        |

    
    Scenario Outline: When the Save button is clicked, the changes are saved. The home page is loaded and the newly selected profile and background images are displayed
        Given I store selected profile and background images
        And I am in edit page
        When I selected "<profilePic>" and "<backgoundPic>"
        And I click Save button
        Then I am on home page
        And selected profile and background images are displayed

        Examples:
            | profilePic        | backgoundPic         |
            | ProfilePic2       | BackgoundPic2        |
            | ProfilePic3       | BackgoundPic3        |
            |                   | BackgoundPic2        |
            | ProfilePic3       |                      |
            | ProfilePic2       |                      |
            |                   | BackgoundPic3        |
            | DefaultProfilePic |                      |
            |                   | DefaultBackgroundPic |
            | DefaultProfilePic | BackgoundPic3        |

    Scenario: When the Save button is clicked, no changes are made. The home page is loaded
        Given I store selected profile and background images
        And I am in edit page
        When I click Save button
        Then I am on home page
        And previously selected profile and background images are displayed

    Scenario Outline: Selcted profile and background images are focused
        Given I am in edit page
        When I selected "<profilePic>" and "<backgoundPic>"
        And I click Save button        
        Given I am in edit page
        When I click Save button
        Then  selected "<profilePic>" and "<backgoundPic>" images are defaulted

        Examples:
            | profilePic        | backgoundPic         |
            | ProfilePic2       | BackgoundPic2        |