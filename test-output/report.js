$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/CucumberTesting/cucumberAutomation/src/test/java/cucumberFeatures/tagging.feature");
formatter.feature({
  "line": 1,
  "name": "BlazeDemo Application Testing",
  "description": "",
  "id": "blazedemo-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "blazedemo-application-testing;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.this_is_a_valid_login_test()"
});
formatter.result({
  "duration": 88926330,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login with wrong username and password",
  "description": "",
  "id": "blazedemo-application-testing;login-with-wrong-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "This is invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.this_is_invalid_login_test()"
});
formatter.result({
  "duration": 24243,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "create a deal",
  "description": "",
  "id": "blazedemo-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    },
    {
      "line": 11,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "This is a deal test case",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.this_is_a_deal_test_case()"
});
formatter.result({
  "duration": 23272,
  "status": "passed"
});
});