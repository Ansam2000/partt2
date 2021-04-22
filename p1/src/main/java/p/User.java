package p;

public class User {
String username;
String password;
 static String status;

public static String getStatus() {
	return status;
}

public static void setStatus(String status) {
	User.status = status;
}

public User(String username, String password) {
	super();
	this.username = username;
	this.password = password;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

}
