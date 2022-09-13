# HUH!
## Heads Up Dashboard!

*A React front-end backed by a Loopback API that provides a widgetized dashboard. Dashboard widgets connect to external API's to provide 3rd party functionality. Each authenticated user gets their own dashboard which they can setup with as many widgets as they like. Widgets will be selected from a gallery and can be placed in whatever order you like. Widget gallery to include widgets for: Weather, Traffic Info, Dictionary and translations, mini-games, and much more. The app is fully responsive so it can go whereever you go, from your laptop to your tablet, to your phone.*

You can visit the most recent deployment at: [https://capstone-hq.herokuapp.com/]
The backend API is located at: [https://capstone-back.mybluemix.net/explorer/]

## Technologies Used
 * NodeJS
 * Express
 * React (via React-Dom)
 * React * Router v4
 * Loopback
 * jquery
 * AJAX
 * Materialize
 * Parallax

## How to install
*Install the Loopback backend first*
 * Clone the backend repo located at: [https://github.com/CalJersey/capstone_back]
 * IN TERMINAL:
     * CD to root directory
     * npm install
     * npm install -g strongloop
     * node .
backend will come up on port 3000 of localhost
*Frontend*
 * Clone this Repo
 * IN TERMINAL:
 * CD to the root directory
 * npm install
 * npm start
 * app will recognize loopback server is running on port 3000 and will ask if you want to run on a different port. Hit enter to confirm.
 * go to http://localhost:3001 to start using it.

## # Trello board with all site assets, user stories, wireframes, ERD, and much more:
https://trello.com/b/j8B3t6ZA/api-dashboard-wdi-capstone

## # Upgrades To Come
 * Make error messaging consistent (Errors currently do not display between pages)
 * Visual overhaul for dashboard
 * Dashboard widgets can be dragged and dropped in position from the gallery
 * More widgets
 * Optional themes for dashboard
 * integrate with 3rd party authentication (facebook/twitter)
