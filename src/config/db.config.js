const { Pool } = require('pg');
const env = require('./env.config');

const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
