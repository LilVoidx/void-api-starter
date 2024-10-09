const db = require('../config/db.config');
const logger = require('../utils/logger.util');

const getAllUsers = async () => {
  logger.info('Fetching all users from the database...');
  const result = await db.query('SELECT * FROM users');
  logger.info(`Fetched ${result.rows.length} users.`);
  return result.rows;
};

const getUserById = async (userId) => {
  logger.info(`Fetching user with ID: ${userId}`);
  const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
  return result.rows[0];
};

const createUser = async (userData) => {
  const { name, email } = userData;
  const result = await db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
  );
  logger.info(`Created a new user: ${JSON.stringify(result.rows[0])}`);
  return result.rows[0];
};

const updateUser = async (userId, userData) => {
  const { name, email } = userData;
  const result = await db.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, userId],
  );
  if (result.rows.length === 0) {
    logger.warn(`No user found with ID: ${userId}`);
    return null;
  }
  logger.info(`Updated user: ${JSON.stringify(result.rows[0])}`);
  return result.rows[0];
};

const deleteUser = async (userId) => {
  const result = await db.query(
    'DELETE FROM users WHERE id = $1 RETURNING id',
    [userId],
  );
  if (result.rows.length === 0) {
    logger.warn(`No user found with ID: ${userId}`);
    return false;
  }
  logger.info(`Deleted user with ID: ${userId}`);
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
