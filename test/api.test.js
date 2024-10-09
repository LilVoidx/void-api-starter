const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db.config');

jest.mock('../src/config/db.config');

describe('User API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/users', () => {
    it('should return a list of users', async () => {
      const mockUsers = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
      ];

      db.query.mockResolvedValue({ rows: mockUsers });

      const response = await request(app).get('/api/users');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUsers);
      expect(db.query).toHaveBeenCalledWith('SELECT * FROM users');
    });

    it('should return 500 if there is a server error', async () => {
      const errorMessage = 'Database connection error';
      db.query.mockRejectedValue(new Error(errorMessage));

      const response = await request(app).get('/api/users');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: errorMessage });
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user and return it', async () => {
      const newUser = { id: 3, name: 'Charlie', email: 'charlie@example.com' };
      const userData = { name: 'Charlie', email: 'charlie@example.com' };

      db.query.mockResolvedValue({ rows: [newUser] });

      const response = await request(app).post('/api/users').send(userData);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(newUser);
      expect(db.query).toHaveBeenCalledWith(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [userData.name, userData.email],
      );
    });

    it('should return 500 if there is an error creating a user', async () => {
      const errorMessage = 'Error inserting user';
      db.query.mockRejectedValue(new Error(errorMessage));

      const response = await request(app)
        .post('/api/users')
        .send({ name: 'Charlie', email: 'charlie@example.com' });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: errorMessage });
    });
  });
});
