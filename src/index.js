import app from "./app";
import "./database";
import configurations from "./config";

app.listen(configurations.PORT);
console.log("Server on port", configurations.PORT);
