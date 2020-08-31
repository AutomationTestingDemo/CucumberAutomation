Feature: BlazeDemo Application Testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and password
Given This is a valid login test

@SmokeTest
Scenario: Login with wrong username and password
Given This is invalid login test

@SmokeTest @End2EndTest
Scenario: create a deal
Given This is a deal test case

@RegressionTest
Scenario: create a contact
Given This is a contact test case

@End2EndTest
Scenario: create a case
Given This is a create case test

@End2EndTest
Scenario: Search a deal
Given This is a search deal test
