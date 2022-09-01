require('dotenv').config();

const {Pool} = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

module.exports =  pool ;

// const pool = new Pool({
//     // 
//     connectionString: process.env.DATABASE_URL,
//     ssl: { 
//         rejectUnauthorized: false 
//     } 
// })

// module.exports = pool;