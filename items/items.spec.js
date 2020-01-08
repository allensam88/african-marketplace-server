const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('market items route functionality', function () {
    beforeEach(async () => {
        await db('items').truncate();
    });

    describe('items unrestricted fetch', () => {
        describe('GET all items', () => {
            it('status code should be 200', function () {
                return request(server)
                    .get('/api/items')
                    .then(res => {
                        expect(res.status).toBe(200);
                    });
            });


        });

    });
});