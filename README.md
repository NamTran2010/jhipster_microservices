# Buisiness Requirement

- Make an application that can support the helpdesk doing a basic task
- Helpdesk can edit any employee information.
- When the helpdesk edit an employee's job, the helpdesk can track all the employee's job history
- Helpdesk can create/edit/update documents related to employees. Only helpdesk has admin role can do this action

# Task list

- Task 1:
  Use Jhipster to generate code
  Make sure you're using Jhipster v7.3.0
  Make sure to use only 1 JDL file to generate Employee and Gateway service
  AuthenticationType = JWT (We only use this in our app)
  serviceDiscoveryType = eureka, buildTool = maven
  Make sure using Spring Boot as backend, Angular as frontend
  Make sure every API in RestController calls to Service Component, not Repository Component
  Make sure every listing API can do pagination and sorting
  Make sure API is protected by a gateway
  Make sure CRUD API related to document is only valid for ROLE_ADMIN

- Task 2:
  Add Salary Field in entity Job History data
  Create a custom method to handle tracking jobs
  Update employee create new job history
  Make sure when we fail in creating job history, no update for employee
  Create new employee, need create job history?

- Task 3:
  Add document service in our JDL file
  Document Table and DocumentType Table
  Make sure document service using h2 as dev database

- Task 4:
  Create frontend for helpdesk
  Helpdesk can CRUD Document while editing the employee entity

- Task 5:
  Update backend codebase for Document service
  Make sure only ROLE_ADMIN can CRUD document of employee

# Solutions and Tips

- Task 1:

  - You have 2 option to generate code
    - Use command line [Jhipster]
      Fistly, generate Code with JHipster
      [npm install -g generator-jhipster@7.3.0]
      [jhipster] In project folder, run "jhipster" to generate code
      Make two file jhipster [employee] [gateway]
      Example: https://www.jhipster.tech/getting-started
    - Use JDL file
      Use "application" in JDL-Studio to generate code
      Example: https://github.com/jhipster/jdl-samples/blob/v8/microservices-blog-store.jh
      Import JDL file [jhipster import-jdl app.jdl]
  - Jhipster Registry → Jhipster Registry is like a dictionary that help service can know some service's metadata such as (IP address, status)
  - Running Jhipster registry by Docker

- Task 2:

  - Add Salary Field in entity Job History data + Job tracking
  - Create JobHistory when update employee (Check all fields of the employee, and if any of them change, create a new job history)
  - Get JobHistory by employee Id
  - Create Table to show JobHistory
  - Create new employee, need create job history?

- Task 3:

  - Add Document Entity and DocumentType Entity

- Task 4:

  - To code FE go to webapp folder
  - Edit on navbar.component.html
  - Create myapp folder and myapp-routing.module file

- Task 5:
  - Use PreAuthorize in SpringSecurity
  - Hide add, edit, delete buttons
