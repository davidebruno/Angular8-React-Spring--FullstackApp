# Angular 8 App

Angular 8 CRUD App that uses as backend: Spring Boot 2, Data, Hiberate 5, H2 DB.

The Backend is built using Spring Boot 2, Data, Hibernate 5, H2 Database, the project is contained into the folder backend and the application can be run using maven.

The Frontend applications execute Create, Read, Update and Delete (CRUD), those operations are executed following the best practice of RESTful API therefore following the convention as below specified:

  Http Method     Operation  
      GET     ->    READ
      POST    ->    CREATE
      PUT     ->    UPDATE
      DELETE  ->    DELETE

The url that return the list of employees stored on H2 Database (Memory) is:

http://localhost:8080/springboot-crud-rest/api/v1/employees

The information returned is in JSON format as in the following sample:

[{"id":1,"firstName":"Davide","lastName":"Bruno","emailId":"davide.bruno@sample.com"},{"id":2,"firstName":"Tim","lastName":"Sanders","emailId":"tim.sanders@sample.com"}]


The frontend is implemented using Typescript, Angular 8 and other libraries.

To install the packages type: ng install from the base folder of the Angular project.

To start the application type: ng serve, open the broser at the url:

http://localhost:4200/


Sample Demo running the App that performs CRUD operations

<img src="https://user-images.githubusercontent.com/29027414/76660720-da87c300-6579-11ea-9769-429cf81c8175.gif" />

# React App

The React App uses the same back end as the Angular App, the data on which the CRUD operations are First Name, Last Name and EmailId, on these fields both the Frontend applications execute Create, Read, Update and Delete (CRUD), those operations are executed following the best practice of RESTful API therefore following the convention as below specified:

  Http Method     Operation  
      GET     ->    READ
      POST    ->    CREATE
      PUT     ->    UPDATE
      DELETE  ->    DELETE
      
The application starts running the command line:

     npm start
     
Once started you can open the browser at http://localhost:3000/

Below is the demo executing CRUD operations:

<img src="https://user-images.githubusercontent.com/29027414/77264437-9e034800-6c9a-11ea-9ab8-4c01b391e099.gif" />
