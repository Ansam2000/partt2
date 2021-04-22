$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:UseCases/ADD.feature");
formatter.feature({
  "name": "add book",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "users add book to the system",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the admin username is \"ansam\" and the password \"1111\" and the statuse \"login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theAdminUsernameIsAndThePasswordAndTheStatuse(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add with login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user status is \"login\"  add the books:",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserStatusIsAddTheBooks(java.lang.String,java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "add the books",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.addTheBooks()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "users add book to the system",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the admin username is \"ansam\" and the password \"1111\" and the statuse \"login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theAdminUsernameIsAndThePasswordAndTheStatuse(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add without login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the admin username \"ansam\" dosent login",
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.the_admin_username_dosent_login(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user status is \"logout\" and want to add the books:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserStatusIsAndWantToAddTheBooks(java.lang.String,java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dont add the books",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.dontAddTheBooks()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:UseCases/login.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "users in the system",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the admin user name is \"ansam\" and the password \"1111\"",
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theAdminUserNameIsAndThePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user enter \"ansam\" as user name and \"1111\" as password",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserEnterAsUserNameAndAsPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login the system",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.loginTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "users in the system",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the admin user name is \"ansam\" and the password \"1111\"",
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theAdminUserNameIsAndThePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "not valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the admin enter \"ansam\" as user name and \"1112\" as password",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theAdminEnterAsUserNameAndAsPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you unable to login the system",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.youUnableToLoginTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:UseCases/logout.feature");
formatter.feature({
  "name": "logout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "logOut",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the admin user name is \"ansam\" and the password \"1111\" and status \"login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.the_admin_user_name_is_and_the_password_and_status(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user status \"login\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout the system",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.logoutTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:UseCases/search.feature");
formatter.feature({
  "name": "search about  book",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search the book by title of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the title as  \u003cTitle\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "A book that matches book title  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Title"
      ]
    },
    {
      "cells": [
        "\"Shepherd\""
      ]
    },
    {
      "cells": [
        "\"Shepherd Press\""
      ]
    }
  ]
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book by title of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the title as  \"Shepherd\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_search_about_the_book_by_the_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A book that matches book title  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesBookTitleShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book by title of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the title as  \"Shepherd Press\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_search_about_the_book_by_the_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A book that matches book title  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesBookTitleShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the book by Author name of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the Author name as  \u003cAuthor\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "A book that matches book Author  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Author"
      ]
    },
    {
      "cells": [
        "\"Tedd Tripp\""
      ]
    },
    {
      "cells": [
        "\"Tedd\""
      ]
    }
  ]
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book by Author name of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the Author name as  \"Tedd Tripp\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheAuthorNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A book that matches book Author  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesBookAuthorShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book by Author name of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the Author name as  \"Tedd\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheAuthorNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A book that matches book Author  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesBookAuthorShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the book by Signature name of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the Signature as  \u003cisbn\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "A book that matches book Signature  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "isbn"
      ]
    },
    {
      "cells": [
        "\"0966378601\""
      ]
    },
    {
      "cells": [
        "\"0198526636\""
      ]
    }
  ]
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book by Signature name of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the Signature as  \"0966378601\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheSignatureAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A book that matches book Signature  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesBookSignatureShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book by Signature name of book",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the Signature as  \"0198526636\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheSignatureAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A book that matches book Signature  should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesBookSignatureShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \u003ctype\u003e with a string or substring \u003cWord\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type",
        "Word"
      ]
    },
    {
      "cells": [
        "\"Title\"",
        "\"Pal\""
      ]
    },
    {
      "cells": [
        "\"Title\"",
        "\"Shepherd Press\""
      ]
    },
    {
      "cells": [
        "\"Signature\"",
        "\"blu\""
      ]
    },
    {
      "cells": [
        "\"Signature\"",
        "\"bluerus\""
      ]
    },
    {
      "cells": [
        "\"isbn\"",
        "\"0966378601\""
      ]
    },
    {
      "cells": [
        "\"Author\"",
        "\"Chitra Banerjee Divakaruni\""
      ]
    },
    {
      "cells": [
        "\"Author\"",
        "\"rip\""
      ]
    }
  ]
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"Title\" with a string or substring \"Pal\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"Title\" with a string or substring \"Shepherd Press\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"Signature\" with a string or substring \"blu\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"Signature\" with a string or substring \"bluerus\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"isbn\" with a string or substring \"0966378601\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"Author\" with a string or substring \"Chitra Banerjee Divakaruni\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user \"ansam\" and the statuse \"login\" and the passward \"1111\" and search about the book by the  \"Author\" with a string or substring \"rip\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.the_user_and_the_statuse_and_the_passward_and_search_about_the_book_by_the_with_a_string_or_substring(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A  book that matches information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.aBookThatMatchesInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the book with uncorect data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \u003cType\u003e with a string or substring \u003cword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "he dosent found any data",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Type",
        "word"
      ]
    },
    {
      "cells": [
        "\"Title\"",
        "\"b\""
      ]
    },
    {
      "cells": [
        "\"Signature\"",
        "\"shapres\""
      ]
    },
    {
      "cells": [
        "\"isbn\"",
        "\"123\""
      ]
    },
    {
      "cells": [
        "\"Author\"",
        "\"ahmad\""
      ]
    }
  ]
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with uncorect data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Title\" with a string or substring \"b\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he dosent found any data",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.he_dosent_found_any_data()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with uncorect data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Signature\" with a string or substring \"shapres\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he dosent found any data",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.he_dosent_found_any_data()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with uncorect data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"isbn\" with a string or substring \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he dosent found any data",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.he_dosent_found_any_data()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the book with uncorect data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Author\" with a string or substring \"ahmad\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he dosent found any data",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.he_dosent_found_any_data()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \u003cTyp\u003e with a string or substring \u003cwor\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Typ",
        "wor"
      ]
    },
    {
      "cells": [
        "\"Title\"",
        "\"Pal\""
      ]
    },
    {
      "cells": [
        "\"Title\"",
        "\"Shepherd Press\""
      ]
    },
    {
      "cells": [
        "\"Signature\"",
        "\"blu\""
      ]
    },
    {
      "cells": [
        "\"Signature\"",
        "\"bluerus\""
      ]
    },
    {
      "cells": [
        "\"isbn\"",
        "\"0966378601\""
      ]
    },
    {
      "cells": [
        "\"Author\"",
        "\"Chitra Banerjee Divakaruni\""
      ]
    },
    {
      "cells": [
        "\"Author\"",
        "\"rip\""
      ]
    }
  ]
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Title\" with a string or substring \"Pal\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Title\" with a string or substring \"Shepherd Press\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Signature\" with a string or substring \"blu\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Signature\" with a string or substring \"bluerus\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"isbn\" with a string or substring \"0966378601\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Author\" with a string or substring \"Chitra Banerjee Divakaruni\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The System has some book with their information",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "p.firsttest.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search about more than one book with same information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user  search about the book by the  \"Author\" with a string or substring \"rip\"",
  "keyword": "When "
});
formatter.match({
  "location": "p.firsttest.theUserSearchAboutTheBookByTheWithAStringOrSubstring(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alist of books that matches the information should be returned and printed on the console",
  "keyword": "Then "
});
formatter.match({
  "location": "p.firsttest.alistOfBooksThatMatchesTheInformationShouldBeReturnedAndPrintedOnTheConsole()"
});
formatter.result({
  "status": "passed"
});
});