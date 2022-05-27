var express = require("express");
var path = require("path");
var app = express();
var hostname = '127.0.0.1';
var port = 3000;

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("view engine", 'ejs');
app.use('/static', express.static('./static'));
app.set("views", path.join(__dirname, 'views/home'));

app.use("/", require("./routes/web"));
// app.use("/api", require("./routes/api"));






app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  