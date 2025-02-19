require('dotenv').config({ path: './myEnvironment.env' }); 
const { Sequelize } = require('sequelize');
if (!process.env.DB_DIALECT) {
   console.error("❌ Error: DB_DIALECT is not defined in .env file.");
   process.exit(1);
 }
 const sequelize = new Sequelize( 
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, { host: process.env.DB_HOST, dialect: process.env.DB_DIALECT, logging: false,
     } );
    sequelize.authenticate() 

    .then(() => console.log('PostgreSQL Connected')) 
    .catch((err) => console.error('Database connection error:', err));

     module.exports = sequelize;