# HeroesApp
# Angular Dashboard with API Key Authentication

This project is a web application built with Angular that demonstrates a **modular architecture using Angular Modules**, **route protection with Guards**, and **API Key–based authentication** with a backend service. The application uses **Angular Material** for UI components and follows a traditional Angular structure using `RouterModule` for routing configuration.

The project was developed to implement a secure and maintainable client application that communicates with a backend API while enforcing authentication and access control on protected routes.

---

## Overview

The application integrates with a backend API that requires an **API Key for authentication**. Requests to protected endpoints include this key, allowing the backend to validate and authorize access.

Angular **Route Guards** are used to prevent unauthorized users from accessing protected sections of the application, ensuring that only authenticated requests can reach specific routes.

The user interface is built using **Angular Material**, providing a modern and responsive design system.

---

## Key Features

### API Key Authentication

The application authenticates requests to the backend using an **API Key**.

Authentication flow:

* The client sends requests to the backend API including an API Key.
* The backend validates the key before allowing access to protected resources.
* Unauthorized requests are blocked.

---

### Route Protection with Guards

Protected routes are secured using **Angular Route Guards**.

Guards ensure that:

* Users cannot navigate to restricted pages without valid authorization.
* Authentication logic is centralized and reusable.
* Unauthorized access attempts are redirected to appropriate routes.

---

### Angular Services for Data Management

Angular **services** are used to manage communication with the backend API.

Services are responsible for:

* Sending HTTP requests
* Managing API interactions
* Handling authentication logic
* Providing reusable data access methods for components

---

### Angular Material UI

The application uses **Angular Material** to implement a consistent and responsive user interface.

Features include:

* Material Design components
* Responsive layouts
* Accessible UI elements
* Consistent styling across the application

---

### Traditional Angular Module Architecture

This project follows the **pre-standalone Angular architecture**, organizing the application using Angular Modules.

Key aspects include:

* Feature modules
* Shared modules
* A centralized `AppModule`
* Modular component organization

---

### Routing with RouterModule

Application routing is configured using `RouterModule` within a dedicated routing module.

This allows:

* Centralized route configuration
* Route guards for protected pages
* Clear separation of navigation logic

Example structure:

```id="l9u6as"
app/
 ├── app.module.ts
 ├── app-routing.module.ts
 ├── auth/
 │   └── guards/
 │        └── auth.guard.ts/
 │        └── public.guard.ts
 │   └── services/
 │        └── auth.service.ts
 │ 
 │
 ├── heroes/
 │   ├── components/
 │   └── interfaces/
 │   └── pages/
 │   └── pipes/
 │   └── services/
 │
 └── shared/
     └── pages/
```

---

## Technologies Used

* Angular
* TypeScript
* Angular Material
* Angular Router (`RouterModule`)
* Angular Guards
* REST API Integration
* API Key Authentication

---

## Purpose

This project demonstrates how to build a **secure Angular application using a traditional module-based architecture**, integrating authentication mechanisms and protected routing while maintaining a clean and maintainable codebase.

It serves as a reference for developers working with **Angular applications that rely on API Key authentication and modular architecture without standalone components**.

## Dev

1. Clone the project
2. Execute the ```npm install```
3. Execute ```npm run backend```
4. Execute the app ```ng serve -o```
