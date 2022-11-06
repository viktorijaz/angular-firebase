# Angular Firebase Fibonacci calculator
The whole project is deployed here: [link](https://ng-syncvr.firebaseapp.com/)

## Architectural decisions
- The only **REST API endpoint** is the one used to calculate Fibonacci number. This endpoint is built with **Firebase Cloud functions**. [github link](https://github.com/viktorijaz/firebase-functions)
- To get the real-time updates of the API call results and show the previous history of calls, we connect directly to **Firebase SDK (via Angularfire) and get real-time updates from the Firestore Database**.
- Under the hood, we are using **Firebase also for authentication**, so that only signed-up users can calculate Fibonacci numbers, while the History of previous calls is public

## Folder structure / components
```
-auth
  |-login (Login Component)
  |-signup (Signup Component)
  |- auth.guard (Guard to prevent routes from unauthenticated access)
  |- auth.service (deals with FireAuth SDK)
-calculate
  |-history(Shows previous API Calls)
  |-new-calculation(Where we can calculate Fibonacci number)
  |- calculate.service (deals with REST http call and also with Firestore database snapshot changes)
  |- calculate.service.spec (showcase a test for calculate service)
-navigation
  |-header(shows/ hide unattainable routes when unauthenticated)
  |-sidenav-list(shows on mobile screens)
-welcome (Welcome Component)
-constants
-app-routing.module
-material.mmodule(for Angular Material imports)
-app.module - bootstraping module
```


## To do
This is only a basic show of the Angular/Firebase capabilities. Further improvements:

- Encapsulate Calculate functionality within separate module and lazy load it
- Introduce Repository pattern to deal with Firebase Databases
- Introduce more Component/ Service tests
- Dockerize the app/ Include it in a monorepo with Sharable components

