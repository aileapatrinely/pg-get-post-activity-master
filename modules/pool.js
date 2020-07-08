const pg = require('pg');

const Pool = pg.Pool;

const pool = newPool({
  database: 'bookstore',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 3000,
});

pool.on('connect', () => {
  console.log('Pool Connected');
});

pool.on('error', (error) => {
  console.log('NOPE! Pool not connected');
});

module.exports = pool;
