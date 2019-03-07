const request = require('supertest');
const db = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server.js', () => {
    afterEach(async () => {
        await db('fighters').truncate();
     })
    it('should set testing env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 ok', async () => {
            const res = await request(server).get('/');
        expect(res.status).toEqual(200);
        });
    
        it('should return {api: "up" }', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({api: 'up'});
        });
    });

    describe('POST /fighters', () => {
      it('POST /fighters', async () => {
        const fighter = {name: 'Joe'};
        const res = await request(server).post('/fighters').send(fighter);
        expect(res.status).toEqual(201);
        expect(res.type).toBe('application/json');
      });
    });

    describe('DELETE /fighters', () => {
        it('should delete a fighter', async () => {
            const res = await request(server).delete('/fighters/1');
            expect(res.status).toEqual(404);

            const fighter = {name: 'Joe'};
            await request(server).post('/fighters').send(fighter);

            const res2 = await request(server).delete('/fighters/1');
            expect(res2.status).toEqual(204);
        });
    });

});

