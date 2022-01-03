# Phones Catalog app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Get a preview at:
* Deployed with heroku: https://phone-catalog-app-heroku.herokuapp.com/

## Run the app
Clone the app into your local computer then:
* `1` Run in terminal: npm install
* `2` Run in terminal (path: phone-catalog-app): npx nodemon server/index.js
* `3` Change path to client folder (path: phone-catalog-app/client): 
  * Run in terminal: cd client
  * Then run in terminal: npm start

## Tools & Libraries
* NodeJS
* Express
* React
* Nodemon: reloads the server automatically
* Loading spinner: react-loader-spinner https://www.npmjs.com/package/react-loader-spinner      

## Task description
Create a phone catalog app from scratch.

### API
A REST API providing phones’ information.

* Implemented in NodeJS and Express.
* With one endpoint:
  * `1` Method: GET
  * `2` Path: /phones
  * `3` Response body example

      [
      {
      "id": 0,
      "name": "iPhone 7",
      "manufacturer": "Apple",
      "description": "lorem ipsum dolor sit amet consectetur.",
      "color": "black",
      "price": 769,
      "imageFileName": "IPhone_7.png",
      "screen": "4,7 inch IPS",
      "processor": "A10 Fusion",
      "ram": 2
      },
      …
      ]
### REACT APP
Allows the user browse the phones catalog.

* Responsive and adapted to a mobile phone.
* The home page displays the list of phones. It display
images of them as well.
* Selected a given phone we obtain the phone details
view displaying a few more info about that phone.
The phones’ information is retrieved from the above described
API.
* There is a spinner component while the REST API
request is ongoing and the app is waiting for phones data.

  
