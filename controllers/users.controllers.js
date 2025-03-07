import { connectDB } from "../utils/sql.js";

export const getUsers = async (req, res) => {
    const sql = connectDB();
    const data = await sql.query("select * from users");
    return res.json(data);
};