var express = require("express");

var app = express();

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);



app.listen(PORT, function(){
   console.log("App listening on PORT:" + PORT);
});


