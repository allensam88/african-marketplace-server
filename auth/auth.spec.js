const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('auth functionality', function () {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('register endpoint', function () {
        it('check status code', function () {
            return request(server)
                .post('/api/register')
                .send({ username: 'me', password: 'pass' })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });

        it('check for json', function () {
            return request(server)
                .post('/api/register')
                .send({ username: 'me', password: 'pass' })
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });

        it('check to see it exists', function () {
            return request(server)
                .post('/api/register')
                .send({ username: 'me', password: 'pass' })
                .then(async res => {
                    expect(await db('users')).toHaveLength(1);
                });
        });
    });

    describe('login endpoint', function () {
        it('check status code', function () {
            return request(server)
                .post('/api/register')
                .send({ username: 'me', password: 'pass' })
                .then(res => {
                    return request(server)
                        .post('/api/login')
                        .send({ username: 'me', password: 'pass' })
                        .then(res => {
                            expect(res.status).toBe(200);
                        })
                });
        });

        it('check for json', function () {
            return request(server)
                .post('/api/register')
                .send({ username: 'me', password: 'pass' })
                .then(res => {
                    return request(server)
                        .post('/api/login')
                        .send({ username: 'me', password: 'pass' })
                        .then(res => {
                            expect(res.type).toMatch(/json/i);
                        })
                });
        });
    });
});