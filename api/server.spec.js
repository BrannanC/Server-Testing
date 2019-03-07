const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
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

    it('POST /fighters', async () => {
        const fighter = {name: 'Joe'};
        const res = await request(server).post('/fighters').send(fighter);
        expect(res.status).toEqual(201);
        // expect(res.body).toEqual({fighter: {name: "Joe"}});
    });
});

