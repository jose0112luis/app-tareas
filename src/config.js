import { config } from "dotenv";

config();

const configurations = {
    PORT: process.env.PORT || 3000,
    MONGODB_HOST: process.env.MONGODB_HOST,
    MONGODB_DATABASE: process.env.MONGODB_DB,
    MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${process.env.MONGODB_DATABASE || "test"}`,
};

export default configurations;
