const express = require('express');

const fighters = require('../fighter/fighterModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/fighters', async (req, res) => {
  const rows = await fighters.getAll();
  res.status(200).json(rows);
});

server.post('/fighters', (req, res) => {
    const fighter = req.body;
    if(!fighter.name){
        res.status(400).json({ error: 'Name required', fighter: req.body.fighter })
    } else {
        fighters.insert(fighter)
            .then(fighter => {
                res.status(201).json({ fighter })
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not add fighter' })
            })
    }
});

server.delete('/fighters/:id', async (req, res) => {
    const rows = await fighters.remove(req.params.id);
  
    res.status(200).json(rows);
  });

module.exports = server;