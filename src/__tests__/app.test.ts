import request from 'supertest';
import app from '../app';

describe('App', () => {
  describe('GET /hello-world', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/hello-world');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'Hello World'
      });
    });
  });

  describe('Error handling', () => {
    it('should handle 404 errors', async () => {
      const response = await request(app).get('/non-existent-route');
      
      expect(response.status).toBe(404);
    });
  });
}); 
