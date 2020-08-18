# My Fitness Companion

Website that helps user to plan their workout that classified into 2 category: Personal and Hero workout. The home page consist of headers and body.

## Getting Started

npm install

This project includes:
* vue-fitness companion -> folder of vue project to build front-end by single page application.
* api-fitness -> for backend using express framework. Database in form of JSON also included here.
* READme.md -> instalation and usage guide

## Deployment

1. Backend : Run terminal on "api-fitness" folder
    npm start
2. Frontend : Run terminal on "vue-fitnesscompanion" folder
    npm run serve
3. Open local host at http://localhost:8080/

How it works:
1. Backend
    * package.json to set up the package
        * * "main" file created as "App.js"
        * * "scripts" to run the project -> npm start
        * * "dependencies" is package being used: express (backend framework), cors (package for providing a Connect/Express middleware), and nodemon (automatically refresh browser if any changes is made)
    * data contains "personals" and "heroes" JSON data that will be sent to port
    * App.js is the main configuration of the backend. "personals" JSON sent to '/personal-workout'; and "heroes" sent to '/heroes-workout'. PORT variable is to set at 5000 where JSON data will be sent to localhost:/5000.

2. Frontend using Vue CLI to create the project.
    Project set up located at 'src' folder:
    * assets : image source for Personals and Heroes workout card image
    * components
        - Headers : navigation bar on top of the page, contains Home and About menu, and web title. This component is occurs in every page, hence components used in App.vue directly.
        - Body : home page contains 2 cards: Personal and Heroes workout.
        - PersonalWorkout : Showing plan of personal workout of 3 items checkbox
        - HeroesWorkout : consist of 3 workouts plan, each contained in card. Each card will show name of workout, image, information, and details button. Details button will pop-up modal that provide further detail plan such as sets, duration, etc.
    * plugins : import file of CSS framework used, Vuetify.
    * router : to set routes
        - Home page located at root path consist of 'Body' components.
        - About's page located at '/about'.
        - Personal workout can be accessed when 'See More' button clicked on Personal Workout card, at Home page, directed to '/personal-workout'. This page consist of 3 workouts in form of checkbox with reverse order by Id.
        - Hero Workout also can be accesed when Hero Workout's 'See More' button clicked, and directed to '/hero-workout'. This page will show 'HeroWorkout' component which consist of 3 cards of workout plan and each will show modal for further details.
    * views : Home and About page. Home consist of body components located in root of port, while About page consist of default text "This is an About page" that can be modified as your preferences.
    * App.vue : All components except Headers showed in here by router-view, while Headers component showed on top of router-view hence headers always occurs in every page.


## Built With

* [Vuetify](https://vuetifyjs.com/en/) - CSS framework.
* [Express JS](https://expressjs.com) - web app framework for Node.js
* [Nodemon](https://nodemon.io) - utility that will monitor for any changes in your source and automatically restart server.
* [CORS](https://enable-cors.org) - to allow browser and server to communicate
* [axios](https://github.com/axios/axios) - library for http communication, making ajax requests, and so on
* [router](https://router.vuejs.org) - router for Vue.js

## Authors

* **Arleen Natalie** - [GitHub](https://github.com/arleenatalie)
