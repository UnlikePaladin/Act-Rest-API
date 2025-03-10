import { connectDB } from "../utils/sql.js";

export const login = async (req, res) => {
    const sql = connectDB();
    const query = {
        "text": "select * from users where username = $1",
        values : [req.body.username]
    };
    const data = await sql.query(query);

    if (data.rows.length < 1) {
        return res.json({loggedIn: false, user : {}});
        return;
    }

    if (req.body.password === data.rows[0].password) {
        return res.json({loggedIn: true, user : data.rows[0]});
    } else {
        return res.json({loggedIn: false, user : {}});
    }
}