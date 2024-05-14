import mysql from 'mysql2'; // npm i mysql2
import dotenv from 'dotenv'; // npm i dotenv
dotenv.config();

// create a "pool" of connections
const pool = mysql.createPool({
    //keep information private in the .env file
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise(); // uses async, await instead of callback functions


async function getNotes() {
    try{
        const [rows] = await pool.query("SELECT * FROM notes");
        return rows;
    }
    catch(err){
        console.log(err);
    }
}
const notes = await getNotes();
console.log(notes);

async function getNote() {
    try{
        const [rows] = await pool.query(`SELECT * FROM notes WHERE id = ?`, [id])
        return rows[0]
    }catch(err){
        console.log(err);
    }
}

async function createNote(id, title, content){
    const [rows] = await pool.query('INSERT INTO notes VALUES (?, ?, ?)', [id, title, content]); 
    //return result;
    //the [title,content] is what is getting passed to the query function
    //question marks represent value coming from user
}
const result = await createNote('2','Note2', 'feed the fish');
console.log(result);








