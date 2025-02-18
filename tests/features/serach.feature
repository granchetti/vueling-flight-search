Feature: Flight Search on Vueling

    Scenario Outline: Verify that flights exist for a flight search with given parameters
        Given I am on the Vueling homepage
        When I search for a one-way flight from "<origin>" to "<destination>" on "<date>" for one passenger
        Then I should see a list of available flights

        Examples:
            | origin | destination | date       |
            | Madrid | Barcelona   | 01/06/2025 |
