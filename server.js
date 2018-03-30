// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
var useragent = require('express-useragent');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/whoami", (request, response) => {
  
  var ipaddressAct = request.ip;
  var languageAct = request.acceptsLanguages()
  
  var source = request.headers['user-agent'],
  ua = useragent.parse(source);
  
  
  var softwareAct = "OS: " + ua.os + ", Browser: " + ua.browser;
  
      
  response.json({ ipaddress: ipaddressAct, language: languageAct[0], software: softwareAct });
  
})

// Simple in-memory store
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
]

app.get("/dreams", (request, response) => {
  response.send(dreams)
})

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", (request, response) => {
  dreams.push(request.query.dream)
  response.sendStatus(200)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})



/*


// server.js
// where your node app starts

// init project
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
//

const app = express();
app.use(bodyParser.json());
app.use(cors);
//app.use(userAgent.express());

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {

})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

*/