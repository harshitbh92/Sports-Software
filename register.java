package selenium;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class lab1{
	@SuppressWarnings("deprecation")
	public static void main(String[] args)
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Downloads\\eclipse-jee-2022-06-R-win32-x86_64\\eclipse\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		//waits a specified time before throwing an exception if the element is not found
		
		driver.get("http://localhost:3000/");
		
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		WebElement login = driver.findElement(By.id("nav-link"));
		login.isDisplayed();
		login.isEnabled();
		login.click();
		
		WebElement register = driver.findElement(By.id("register"));
		register.isDisplayed();
		register.isEnabled();
		register.click();
		
WebElement name = driver.findElement(By.id("name"));
		
		name.isDisplayed();
		name.isEnabled();
		name.sendKeys("Example");
		
		
		WebElement email = driver.findElement(By.id("email"));
		
		email.isDisplayed();
		email.isEnabled();
		email.sendKeys("example5_be21@thapar.edu");
		
		
WebElement rollno = driver.findElement(By.id("rollno"));
		
rollno.isDisplayed();
rollno.isEnabled();
rollno.sendKeys("446499463");

WebElement phonenumber = driver.findElement(By.id("phonenumber"));
phonenumber.isDisplayed();
phonenumber.isEnabled();
phonenumber.sendKeys("8799944530");
		
		WebElement password = driver.findElement(By.id("password"));
		password.isDisplayed();
		password.isEnabled();
		password.sendKeys("Password@123");
		
	
		
		WebElement confirmpassword = driver.findElement(By.id("confirmpassword"));
		confirmpassword.isDisplayed();
		confirmpassword.isEnabled();
		confirmpassword.sendKeys("Password@123");
		
	    WebElement registersubmit = driver.findElement(By.id("registersubmit"));
	    registersubmit.click();
	
	
		
		
		try {
			Thread.sleep(6000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		driver.close();
	}
}