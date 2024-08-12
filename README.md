# **Front-End** Interface for ExpenseTracking Project

---
## Background:

This front-end was created using React.js, and interacts with the backend API located [here](https://github.com/EvanWithaW/expensetracking-backend).

---

## Running the App:

*This app requires Node to be installed in order to run*

***Instructions:***

1. Clone the [backend repo](https://github.com/EvanWithaW/expensetracking-backend) and ensure it is running on your local machine.
   - This will require some configuration only in the application.properties file to connect your db.
  


2. Clone the repo, navigate to the root of this directory, and run the following command:

   - ```npm start```


--- 

## Features:

- **Login**:
    - Users can login to their account using their email and password.
    - User's sessions will be remembered in JWT tokens stored in session storage (will be changed) on the browser.
    - All API endpoints are protected by Spring Security
- **Expenses Overview**:
  - Users can view all of their personal expenses in a table format.


## Planned Features

- **Registration**:
  - Although the endpoints for registering a new user are already created in the backend, I need to still add the registering functionality to the frontend.
- **Expenses**:
  - Users will be able to create new expenses.
  - Users will be able to edit/remove expenses.
  - Users will be able to preview important metrics such as how much they are spending and top spending amounts

    