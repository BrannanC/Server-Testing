const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
  };

  async function insert(fighter) {
    const [id] = await db('fighters').insert(fighter);
  
    return db('fighters').where({id}).first();
  }
  
  async function update(id, changes) {
    return null;
  }
  
  function remove(id) {
    return db('fighters').where({id}).del();
  }
  
  function getAll() {
    return db('fighters');
  }
  
  function findById(id) {
    return null;
  }
  