const request = require('supertest');

const Fighters = require('./fighterModel');
const db = require('../data/dbConfig.js');

describe('fighterModel.js', () => {
    afterEach(async () => {
        await db('fighters').truncate();
     })

     describe('insert', () => {
        it('should insert a fighter', async () => {
            const fighter = await Fighters.insert({ name: 'joe' });
            expect(fighter.name).toBe('joe');
        });
    
        it('should return a list of fighters', async () => {
            Fighters.insert({ name: 'joe' });
            const fighters = await Fighters.getAll();
            expect(fighters.length).toBe(1);
        });
     });

     describe('delete', () => {
        it('should remove a fighter', async () => {
            const fighter = await Fighters.insert({ name: 'joe' });
            expect(fighter.name).toBe('joe');
            await Fighters.remove(1);
            const fighters = await Fighters.getAll();
            expect(fighters.length).toBe(0);
        });
     });
});