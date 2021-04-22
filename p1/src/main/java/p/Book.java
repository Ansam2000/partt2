
package p;

public class Book {
String title1;
String author1;
String signature1;
int isbn;
public Book(String ti, String au, String si, int isbn) {
	super();
	String s;
	String s1;
	String s2;
	s=ti;
	s1=au;
	s2=si;

	 this.title1=s;
	this.author1=s1;
	this.signature1=s2;
	this.isbn = isbn;
}

public Book() {
}

public String getTitle() {
	return title1;
}
public void setTitle(String a) {
	title1 = a;
}
public String getAuthor() {
	return author1;
}
public void setAuthor(String a) {
	author1 = a;
}
public String getSignature() {
	return signature1;
}
public void setSignature(String a) {
	signature1 = a;
}
public int getIsbn() {
	return isbn;
}
public void setIsbn(int isbn) {
	this.isbn = isbn;
}

}
