import { connectDB } from "../utils/sql.js";

export const getUsers = async (req, res) => {
    const sql = connectDB();
    const data = await sql.query("select * from users");
    return res.json(data);
};

export const getUser = async (req, res) => {
    const sql = connectDB();
    const query = {
        text : "select * from users where user_id = $1",
        values : [req.params.id]
    };
    const data = await sql.query(query);
    return res.json(data);
};