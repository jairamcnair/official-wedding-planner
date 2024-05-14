// make sure you install mysql2 - npm install mysql2 (type in terminal)
// make sure you run - npm init -y (in terminal) and add "type": "module" to the package.json file under "version"

import mysql from 'mysql2';

// create a "pool" of connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'MySQL8IsGreat!',
  database: 'weddingplanner'
}).promise(); // uses async, await instead of callback functions


const result = await pool.query("SELECT * FROM guestlist");

console.log(result);
