const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('user route functionality', function () {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('restricted access', () => {
        describe('GET /user', () => {
            it('status code should be 401', function () {
                return request(server)
                    .get('/api/users')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
            });

        });
    })
});