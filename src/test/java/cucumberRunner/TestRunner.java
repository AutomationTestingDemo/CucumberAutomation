package cucumberRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C://CucumberTesting//cucumberAutomation//src//test//java//cucumberFeatures//tagging.feature",
glue= {"cucumberStepDefs"},
format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_output/cucumber.xml"},
strict=true,
dryRun=false,
tags={"@SmokeTest"},
monochrome=true
)

public class TestRunner {

}



// OR : "@SmokeTest,@RegressionTest"

// AND : "@SmokeTest","@RegressionTest"

// ~ : "~@SmokeTest","~@RegressionTest","~@End2EndTest" ignores the tagged testcases