Feature: Validation of DataTablesMaps BlazeDemo

Scenario: Search Flights

Given Open the HomePage of BlazeDemo website
When Select depature and destination
| depature | destination |
| Portland | London |
| Boston | Rome |
And Click on find flights
Then Validate the title