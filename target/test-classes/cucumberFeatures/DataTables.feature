Feature: Validation of DataTables BlazeDemo

Scenario: Search Flights

Given Open the HomePage of BlazeDemo website
When Select depature and destination
| Boston | Rome |
And Click on find flights
Then Validate the title