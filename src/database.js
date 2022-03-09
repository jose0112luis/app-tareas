import { connect } from "mongoose";
import configurations from "./config";

(async () => {
    try {
        const db = await connect(configurations.MONGODB_URI);
        console.log("DB Conected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();
