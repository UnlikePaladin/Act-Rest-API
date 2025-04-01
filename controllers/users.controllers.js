import { connectDB } from "../utils/sql.js";
import { getSalt, hashPassword} from "../utils/hash.js";

export const getUsers = async (req, res) => {
    const sql = connectDB();
    const data = await sql.query("select * from users");
    res.json(data.rows);
};

export const getUser = async (req, res) => {
    const sql = connectDB();
    const query = {
        text : "select * from users where user_id = $1",
        values : [req.params.id]
    };
    const data = await sql.query(query);
    res.json(data.rows);
};


export const postUser = async (req, res) => {
    const {username, first_name, last_name, birthdate, password, email, points} = req.body;
    const salt= getSalt();
    const hash = hashPassword(password, salt);
    const saltedHash = salt + hash;
    const sql = connectDB();
    
    const query = {
        text : "insert into users(username, first_name, last_name, birthdate, password, email, points) values($1, $2, $3, $4, $5, $6, $7)",
        values : [username, first_name, last_name, birthdate, saltedHash, email, points]
    };
    const data = await sql.query(query);
    res.json(data.rows);
};

export const updateUserFromId = async (req, res) => {
    const sql = connectDB();
    const {user_id, username, first_name, last_name, birthdate, password, email, points} = req.body;
    
    const query = {
        text : "UPDATE users SET username = $2, first_name = $3, last_name = $4, birthdate = $5, password = $6, email = $7, points = $8 WHERE user_id = $1;",
        values : [user_id, username, first_name, last_name, birthdate, password, email, points]
    };
    const data = await sql.query(query);
    res.json(data.rows);
};


export const updateUser = async (req, res) => {
    const sql = connectDB();
    const {user_id, username, first_name, last_name, birthdate, password, email, points} = req.body;
    
    const query = {
        text : "UPDATE users SET username = $1, first_name = $2, last_name = $3, birthdate = $4, password = $5, email = $6, points = $7 WHERE username = $1;",
        values : [username, first_name, last_name, birthdate, password, email, points]
    };
    const data = await sql.query(query);
    res.json(data.rows);
};

export const deleteUser = async (req, res) => {
    const sql = connectDB();
    const query = {
        text : "delete from users where user_id = $1",
        values : [req.params.id]
    };
    const data = await sql.query(query);
    res.json(data);
};

