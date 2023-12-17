const express = require("express");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
// const http = require("http");
const { engine: handlebars } = require("express-handlebars");
const productRouter = require("./routes/product.routes");

const app = express();
// const server = http.createServer(app);

const PORT = 8080;
const httpServer = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);

const io = new Server(httpServer);

mongoose
  .connect("mongodb://0.0.0.0:27017/apidb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));

module.exports = mongoose;

// const Productos = require("./Productos");
// const Mensajes = require("./Mensajes");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "index",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use("/api/products", productRouter);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
