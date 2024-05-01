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
		
	
		WebElement loginemail = driver.findElement(By.id("email"));
		
	loginemail.isDisplayed();
	loginemail.isEnabled();
	loginemail.sendKeys("example1_be21@thapar.edu");
	
	WebElement loginpassword = driver.findElement(By.id("password"));
	loginpassword.isDisplayed();
	loginpassword.isEnabled();
	loginpassword.sendKeys("Password@123");
	
	
	WebElement loginsubmit = driver.findElement(By.id("submit"));
	loginsubmit.isEnabled();
	 loginsubmit.click();
		
		
		
		
		try {
			Thread.sleep(6000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		driver.close();
	}
}