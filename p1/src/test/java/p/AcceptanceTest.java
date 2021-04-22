package p;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(features = "UseCases",
plugin = {"html:target/cucmber/wikipidia.html"},
snippets = SnippetType.CAMELCASE ,
glue= {"p"},
strict=true)
public class AcceptanceTest {

}

