Feature: Validation of BlazeDemo

Scenario: Search Flights

Given Open the HomePage of BlazeDemo website
When Select "Portland" and "London"
And Click on find flights
Then Validate the title


#With Example Keyword
Scenario Outline: Search Flights

Given Open the HomePage of BlazeDemo website
When Select "<dep>" and "<dest>"
And Click on find flights
Then Validate the title

Examples:
   | dep | dest |
   | Portland | London |
   | Boston | Rome |