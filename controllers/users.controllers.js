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


export const postUser = async (req, res) => {
    const sql = connectDB();
    const {username, first_name, last_name, birthdate, password, email} = req.body;
    
    const query = {
        text : "insert into users(username, first_name, last_name, birthdate, password, email) values($1, $2, $3, $4, $5, $6)",
        values : [username, first_name, last_name, birthdate, password, email]
    };
    const data = await sql.query(query);
    return res.json(data);
};

export const updateUser = async (req, res) => {
    const sql = connectDB();
    const {username, first_name, last_name, birthdate, password, email} = req.body;
    
    const query = {
        text : "update * from users(username, first_name, last_name, birthdate, password, email) values($1, $2, $3, $4, $5, $6) where username = $1",
        values : [username, first_name, last_name, birthdate, password, email]
    };
    const data = await sql.query(query);
    return res.json(data);
};

export const deleteUser = async (req, res) => {
    const sql = connectDB();
    const query = {
        text : "delete from users where user_id = $1",
        values : [req.params.id]
    };
    const data = await sql.query(query);
    return res.json(data);
};

