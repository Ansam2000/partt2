package p;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import java.util.ArrayList;
import java.util.List;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import p.Book;
import p.Control;
import p.User;

public class firsttest {
public static	String t_username,t1_password,t3_username;
public static	String t2_username,t2_password,t3_password,t4_password,ss1,ss2,ss3,ss4,ss5;
public static String title,author,signature,found,strings;
String isbn;

public static ArrayList< Book> item1=new ArrayList< Book>();

	User u,u2;
	Control c=new Control();
Book b =new Book();
@Given("the admin user name is {string} and the password {string}")
public void theAdminUserNameIsAndThePassword(String string, String tpassword) {
		u=new User(string,tpassword);
		t1_password=tpassword;
		 c.setitem(u);
		
		}


@When("the user enter {string} as user name and {string} as password")
public void theUserEnterAsUserNameAndAsPassword(String string, String string2) {
		    // Write code here that turns the phrase above into concrete actions
			
			t2_password=c.search(string,string2);
		}
@Then("login the system")
public void loginTheSystem() {
		    // Write code here that turns the phrase above into concrete actions
		
		assertEquals(t2_password,t1_password);
		u.setStatus("login");
		
		}
		@When("the admin enter {string} as user name and {string} as password")
		public void theAdminEnterAsUserNameAndAsPassword(String string, String string2) {
		    // Write code here that turns the phrase above into concrete actions
			 t3_password = c.search(string,string2)	;
			 t4_password=string2;
			 
		}

		@Then("you unable to login the system")
		public void youUnableToLoginTheSystem() {
		    // Write code here that turns the phrase above into concrete actions
			assertNotEquals(t3_password,t4_password);
		
			System.out.println("Wrong Password");
		}

		@Given("the admin user name is {string} and the password {string} and status {string}")
		public void the_admin_user_name_is_and_the_password_and_status(String string, String string2, String string3) {
			    // Write code here that turns the phrase above into concrete actions
			u=new User(string,string2);
			u.setStatus(string3);
			c.setitem(u);
				t2_username=string;
			}


			@When("the user status {string}")
			public void theUserStatus(String string) {
			    // Write code here that turns the phrase above into concrete actions
				ss1=string;
				ss2=c.searchstatus(t2_username);
				
			}
			@Then("logout the system")
			public void logoutTheSystem() {
			    // Write code here that turns the phrase above into concrete actions
				
				assertEquals(ss1,ss2);
			}


			
	
				
   
 
          @Given("the admin username is {string} and the password {string} and the statuse {string}")
           public void theAdminUsernameIsAndThePasswordAndTheStatuse(String string, String string2, String string3) {
         // Write code here that turns the phrase above into concrete actions
	        t2_username=string;
	    u2=new User(string,string2);
	
	      c.setitem(u2);
	 u.setStatus(string3);
         }



				@When("the user status is {string}  add the books:")
				public void theUserStatusIsAddTheBooks(String string,List <List>A) {
					ss1=string;
					ss2=c.searchstatus(t2_username);
					if(	ss1.equals(ss2)) {
		                for(int i=1;i<(A.size());i++) {
							
							title=(String) A.get(i).get(0);
							author=(String) A.get(i).get(1);
							signature=(String) A.get(i).get(2);
							isbn=(String) A.get(i).get(3);
							c.addbook(title,author,signature,isbn);
							
							
		                }}

					
					
				 }
				@Then("add the books")
				public void addTheBooks() {
					assertEquals(ss1,ss2);
      }
				
				@Given("the admin username {string} dosent login")
				public void the_admin_username_dosent_login(String string) {
					  u.setStatus("logout");
					  t2_username=string;
				}
					@When("the user status is {string} and want to add the books:")
					public void theUserStatusIsAndWantToAddTheBooks(String string,List <List>B) {
						ss1=string;
						ss2=c.searchstatus(t2_username);
						
					}

					
					@Then("dont add the books")
					public void dontAddTheBooks() {
						assertEquals(ss1,ss2);
						System.out.println("you should login to be able add a book ");
						}

						@Given("these books are contained in the library")
						public void theseBooksAreContainedInTheLibrary(List <List>A) {
							System.out.println("---------------------------------------------");
							System.out.println("The Search Result :");
							 for(int i=1;i<(A.size());i++) {
									
									title=(String) A.get(i).get(0);
									author=(String) A.get(i).get(1);
									signature=(String) A.get(i).get(2);
									isbn=(String) A.get(i).get(3);
									c.addbook(title,author,signature,isbn);
									
									
				                }
						}

			

						@When("the user  search about the book by the title as  {string}")
						public void the_user_search_about_the_book_by_the_title_as(String string) {
						    // Write code here that turns the phrase above into concrete actions
							String tit=string;
							
							System.out.println(string+" is");
							found=c.searchByTitle(tit);
						}

						

						@Then("A book that matches book title  should be returned and printed on the console")
						public void aBookThatMatchesBookTitleShouldBeReturnedAndPrintedOnTheConsole() {
							// Write code here that turns the phrase above into concrete actions
							assertEquals("found",found);
					}
						
							@When("the user  search about the book by the Author name as  {string}")
							public void theUserSearchAboutTheBookByTheAuthorNameAs(String string) {
							    // Write code here that turns the phrase above into concrete actions
								
								String Aut=string;
								System.out.println(string+" is");
								found=c.searchByAuthor(Aut);
							
							}

							

							@Then("A book that matches book Author  should be returned and printed on the console")
							public void aBookThatMatchesBookAuthorShouldBeReturnedAndPrintedOnTheConsole() {
							    // Write code here that turns the phrase above into concrete actions
								assertEquals("found",found);
							}

							
								@When("the user  search about the book by the Signature as  {string}")
								public void theUserSearchAboutTheBookByTheSignatureAs(String string) {
								    // Write code here that turns the phrase above into concrete actions
									String sig=string;
									
									System.out.println(string+" is");
									found=c.searchByisbn(sig);
								
								}

								
								@Then("A book that matches book Signature  should be returned and printed on the console")
								public void aBookThatMatchesBookSignatureShouldBeReturnedAndPrintedOnTheConsole() {
								    // Write code here that turns the phrase above into concrete actions
									assertEquals("found",found);
									
								}




						
								@When("the user {string} and the statuse {string} and the passward {string} and search about the book by the  {string} with a string or substring {string}")
								public void the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(String string, String string2, String string3, String string4, String string5) {
									u=new User(string,string3);
									u.setStatus(string2);
									c.setitem(u);
									t3_username=string;
									ss3=string2;
									ss4=c.searchstatus(t3_username);
								
									
								if(string4.equals("Title")) {
									
									String tit=string5;
									System.out.println(string5+" is");
									found=c.searchByTitle(tit);	
								}
								else if(string4.equals("Author")) {
									String Aut=string5;
									
									System.out.println(string5+" is");
									found=c.searchByAuthor(Aut);
								
								}
								else if(string4.equals("Signature")) {
									String sign=string5;
									
									System.out.println(string5+" is");
									found=c.searchBysign(sign);
								
								}
								else if(string4.equals("isbn")) {
									String isbn=string5;
									
									System.out.println(string5+" is");
									found=c.searchByisbn(isbn);
								
								}
								ss5=ss4+"_"+found;
								}
								
								

									@Then("A  book that matches information should be returned and printed on the console")
									public void aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole() {
									    // Write code here that turns the phrase above into concrete actions
										assertEquals("login_found",ss5);

									}

									@When("the user  search about the book by the  {string} with string or substring {string}")
									public void theUserSearchAboutTheBookByTheWithStringOrSubstring(String string, String string2) {
									    // Write code here that turns the phrase above into concrete actions
									   
										
										if(string.equals("Title")) {
									
											String tit=string2;
											System.out.println(string2+" is");
											found=c.searchByTitle(tit);	
										}
										else if(string.equals("Author")) {
											String Aut=string2;
											System.out.println(string2+" is");
											found=c.searchByAuthor(Aut);
										
										}
										else if(string.equals("Signature")) {
											String sign=string2;
											System.out.println(string2+" is");
											found=c.searchBysign(sign);
										
										}
										else if(string.equals("isbn")) {
											String isbn=string2;
											System.out.println(string2+" is");
											found=c.searchByisbn(isbn);
										
										}
									}
									@Then("he dosent found any data")
									public void he_dosent_found_any_data() {
									    
										assertEquals("not found",found);
										
									}
								
									@When("the user  search about the book by the  {string} with a string or substring {string}")
									public void theUserSearchAboutTheBookByTheWithAStringOrSubstring(String string, String string2) {
									    // Write code here that turns the phrase above into concrete actions
									
										
										if(string.equals("Title")) {
									
											String tit=string2;
											System.out.println(string2+" is");
											found=c.searchByTitle(tit);	
										}
										else if(string.equals("Author")) {
											String Aut=string2;
											System.out.println(string2+" is");
											found=c.searchByAuthor(Aut);
										
										}
										else if(string.equals("Signature")) {
											String sign=string2;
											System.out.println(string2+" is");
											found=c.searchBysign(sign);
										
										}
										else if(string.equals("isbn")) {
											String isbn=string2;
											System.out.println(string2+" is");
											found=c.searchByisbn(isbn);
										
										}
									   }

							

								
								
								@Then("Alist of books that matches the information should be returned and printed on the console")
								public void alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole() {
								    // Write code here that turns the phrase above into concrete actions
									assertEquals("found",found);
								}







}












