# Platelet Donors

## Setup Locally
This project is generated via [Express application generator](https://expressjs.com/en/guide/routing.html).
To run this project,
 - Download and install node form https://nodejs.org/en/download/.
 - Clone this repository on your local system
 - Run the following commands in the terminal/cmd
   - Go to project folder
   - Run ```npm install```
   - Run ```DEBUG=myapp:* npm start``` for MacOS or Linux and ```set DEBUG=myapp:* & npm start``` for Windows
 - Then load http://localhost:3000/ in your browser to access the app.
 - To test-out/make changes to the front-end, run ```nodemon -x "npm run sass" -w views/ -w public/stylesheets/  ./bin/www``` . Nodemon provides hot reloading for the directories added in the -w option. This way, you don't have to restart the server every time you make a change.
