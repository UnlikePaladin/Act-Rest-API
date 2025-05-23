import fs from "fs";
import pg from "pg";

const config = {
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.BD_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
};

export const connectDB = () => {
  const client = new pg.Client(config); 
  client.connect();
  return client; 
};
