import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect("mongodb://localhost/crud-tareas");
        console.log("DB Conected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();
