package p;

import java.util.ArrayList;

import java.util.Scanner;


public class Control {
	 String username;
	 String password;
	 String status;
	 String s1;
	 String s22;
	 String s3;
	  int s4;
	 private ArrayList< User> items=new ArrayList< User>();
	 private ArrayList< Book> item=new ArrayList< Book>();
	 String s="not found";
	 String ss="found";
	Scanner sc=new Scanner(System.in);
	
	public void setitem(User u) {
		items.add(u);
	}
	public User getitem(int x) {
		
		return items.get(x);
	}
	
	
	Control(){
	
	}
	public String search(String s,String s2) {
		for(int i=0;i<items.size();i++) {
     		if((items.get(i).getUsername()).equals(s)) {
     			if((items.get(i).getPassword()).equals(s2)) {
     				password= s2;
     				
     			}
     			else 
     				password=null;
     		}
	 }
		return password;

    }
	public String validIsbn() {
		
	
		return status;

    }
	public String searchstatus(String s) {
		for(int i=0;i<items.size();i++) {
     		if((items.get(i).getUsername()).equals(s)) {
     			
     				getitem(i);
					status=User.getStatus() ;
     				
     		}
     			else 
     				status=null;
     		}
	
		return status;

     }
	
	public String searchByTitle(String  title) {
		int o=0;
		String booktitle=title;
	
		for(int i=0;i<item.size();i++) {
     		if((item.get(i).getTitle()).contains(booktitle)) {
     		o++;
     		
     			
     		}
		}
		if(o==0) {return s;}
		else
			return ss;
		
	}
	public String searchByAuthor(String aut) {
		int o=0;
		String bookAuthor=aut;
		
		for(int i=0;i<item.size();i++) {
     		if((item.get(i).getAuthor()).contains(bookAuthor)) {
     		o++;
     	
     			
     		}
		}
		if(o==0) {return s;}
		else
			return ss;
	      }
	public String searchBysign(String sig) {
		int o=0;
		String bookSignture=sig;
		
		for(int i=0;i<item.size();i++) {
     		if((item.get(i).getSignature()).contains(bookSignture)) {
     		o++;
     		 
     			
     		}
		}
		if(o==0) {return s;}
		else
			return ss;
	}
	public String searchByisbn(String isbn) {
		int o=0;
		int  bookisbn=Integer.parseInt(isbn);
		
		
		for(int i=0;i<item.size();i++) {
     		if((item.get(i).getIsbn())==(bookisbn)) {
     		o++;
     		
     			
     		}
		}
		if(o==0) {return s;}
		else
			return ss;
	}

	
	public boolean searchisbn(int isbn) {
		int n1=isbn;
		 boolean checker1 = true;
		for(int i=0;i<item.size();i++) {
     		if((item.get(i).getIsbn())==(n1)) {
     			
     			 checker1=false;
     		}
		}
		return checker1;

    }
	public boolean validIsbn(int isbn) {

            int n=isbn;
	      

	       int sum = 0;
	        for (int i = 1; i <= 10; i++) {
	            int digit = n % 10;          
	            sum = sum + i * digit;
	            n = n / 10;
	        }
	        
	        return (sum%11==0);
		}
	
    public void addbook(String a1,String a2, String a3,String a4) {
	 int n = Integer.parseInt(a4);
	  if(validIsbn(n)&&searchisbn(n)){
	
			Book b =new Book(a1,a2,a3,n);
			item.add(b);
		
	  }
		

     }



		
}