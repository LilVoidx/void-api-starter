const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('should respond with a welcome message on the root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: '👋hello world🌍' });
  });

  it('should respond with a 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
  });
});
