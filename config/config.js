require('dotenv').config();


// console.log("DB_DIALECT:", process.env.DB_DIALECT);
// console.log("Full ENV:", process.env); 


module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect":process.env.DB_DIALECT,
    "logging":false
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect":process.env.DB_DIALECT,
    "logging":false
  }
}