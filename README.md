# Phones Catalog app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Get a preview at:
* Deployed with heroku: https://phone-catalog-app-heroku.herokuapp.com/

## Run the app

```shell
    # Clone or install commands
    npm clone https://github.com/klaryon/phone-catalog-app.git
    npm install
    
    # Starts listening the server
    npx nodemon server/index.js
    
    # Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
    cd client
    npm start
```

## Tools, Libraries & Language
* NodeJS
* Express
* JavaScript
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

  
