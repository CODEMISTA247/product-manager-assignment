const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

app.use(cors())
app.use(express.json()); /* This is new and allows JSON Objects to be posted  */

app.use(express.urlencoded({extended: true})) /* This is new and allows JSON objects with strings and arrays */

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

require('./config/mongoose.config'); /* Imports Mongoose */
require('./routes/product.routes')(app); // We're importing the routes export. 

// These two lines are the long-hand notation of the code above. They better show what's going on.
    // const personRoutes = require("./route/person.routes");
    // <--- assign the exported function to a const 
    // personRoutes(app); <-- invoke the function and pass in the express  '"app" server 







app.listen(port, () => 
    console.log(`Listening on port: ${port}`));