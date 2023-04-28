### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed

- What is the signature portion of the JWT?  What does it do?
The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. To create the signature, the Base64-encoded header and payload are taken, along with a secret, and signed with the algorithm specified in the header.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, a JWT is easily decoded by using the JWT decode() method. This is why it is very important not to use JWT to transmit any sensitive information!

- How can you implement authentication with a JWT?  Describe how it works at a high level.
On a high level, JWT authentication works by signing a token for a user that often has a few relevant details about the user (like username and admin status) in the payload. The token is signed with a secret key known only to the server and transmitted upon an initial registration or login. Then with every subsequent request to the application, that JWT may be required to be sent along with the request in order to access a particular resource. The JWT is then verified and the user has access to that resource. 


- Compare and contrast unit, integration and end-to-end tests.
  Unit tests:
    Unit tests are the smallest and most focused type of testing. They aim to test individual units of code, such as functions or methods, in isolation from the rest of the application.
    Unit tests are typically automated and use mock objects or test doubles to simulate dependencies. Unit tests are fast to run and provide quick feedback on whether a specific unit of code is working as expected. Unit tests are primarily used to verify that individual units of code are working correctly and can catch defects early in the development cycle.

  Integration tests:
    Integration tests verify that individual units of code work together correctly as a group.
    Unlike unit tests, integration tests involve multiple units of code and often require real system resources such as databases, APIs, or web services.
    Integration tests can be used to test various levels of integration, such as module-level, API-level, and system-level integration.
    Integration tests are used to catch defects that may only surface when multiple units of code are combined.

  End-to-end tests:
    End-to-end (E2E) tests are the most comprehensive type of testing.
    They simulate real-world scenarios and test the entire software system from start to finish, including all layers, components, and services.
    E2E tests often involve user interfaces and external systems, such as web browsers, databases, and third-party APIs.
    E2E tests are designed to catch defects that may only surface when all the parts of a software system are integrated and working together.
    E2E tests are slower and more challenging to maintain than unit and integration tests.


- What is a mock? What are some things you would mock?
 a mock is a simulated object or component that mimics the behavior of a real object or component. Mocks are often used in unit testing to isolate and test individual units of code without depending on other components of the system.  Some things you would mock in software testing include:
    Dependencies: When testing a unit of code that relies on external dependencies such as databases, APIs, or other services, you can mock those dependencies to simulate their behavior and avoid relying on external resources during testing.
    Collaborators: In object-oriented programming, classes often collaborate with other classes to perform tasks. When testing a class, you can use mocks to simulate the behavior of collaborating classes and isolate the class under test.
    Responses: When testing code that interacts with external services, such as HTTP APIs, you can use mocks to simulate the responses of those services and test different scenarios, such as error responses or slow responses.
    User interactions: When testing user interfaces, you can use mocks to simulate user interactions such as button clicks, text inputs, or mouse movements.

- What is continuous integration?
Continuous Integration (CI) is a software development practice that involves frequently merging code changes from multiple developers into a shared repository. The primary goal of CI is to catch integration issues early in the development process by automatically building, testing, and validating code changes every time they are submitted to the shared repository.
- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?
TDD is a software development approach that focuses on writing tests before writing code. It has many benefits, such as improved code quality, faster feedback, and better design, but also has drawbacks such as additional effort and the risk of over-engineering.

- What is the value of using JSONSchema for validation?
Overall, using JSONSchema for validation provides a way to ensure the quality and consistency of JSON data, improve communication and collaboration among developers, and increase the maintainability of the system.
- What are some ways to decide which code to test?
Deciding which code to test involves a combination of factors, including code coverage, risk-based testing, user stories, requirements, change impact analysis, and performance testing. By focusing testing efforts on the most critical and risky parts of the system, developers can ensure that the system is thoroughly tested and meets the required quality standards.

- What does `RETURNING` do in SQL? When would you use it?
When used with an INSERT statement, RETURNING returns the values of the inserted rows. When used with an UPDATE or DELETE statement, RETURNING returns the values of the updated or deleted rows. RETURNING can be useful in several scenarios, such as Retrieving generated values: When an INSERT statement generates a value, such as a primary key or a timestamp, RETURNING can be used to retrieve the generated value. Checking the result of an operation: RETURNING can be used to check the result of an UPDATE or DELETE operation, such as the number of rows affected by the operation. Chaining multiple operations: RETURNING can be used to chain multiple DML operations, such as inserting a row and then updating it in a single transaction.

- What are some differences between Web Sockets and HTTP?
HTTPs and Websockets are the communication protocols that have a defined set of rules with which communication works. The major difference is the data transmission mode. An HTTP starts sending data as responses when a request is received, whereas Websockets send and receives data based on data availability. Web Sockets and HTTP serve different purposes and are optimized for different types of communication. While HTTP is still the dominant protocol for most web-based applications, Web Sockets are becoming increasingly popular for real-time applications such as chat, gaming, and live data feeds

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I do like some aspects of Express such as always having to separate the HTTP Methods naturally, an issue I had with flask was mixing the logic in certain routes. However, overall, and perhaps because I've
  not spent enough time working on Express projects, I would choose Flask. 
