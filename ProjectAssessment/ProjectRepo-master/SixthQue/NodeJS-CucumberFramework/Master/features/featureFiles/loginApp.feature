Feature:Login Functionality

  Scenario Outline: Verifying Login Functionality for OpenCart application

    Given Open browser and Start Open Cart Application
    And I verify the title of the application
    Then I click on Login link
    When I enter the <email address> in email ID field
    And I enter <password> in password field
    Then I click on Login button
    Then I should see the error message as "<error message>"

    Examples:
      |email address|password|error message|
      |ravitejanemana@gmail.com|wrongpwd|No match for E-Mail and/or Password.|
