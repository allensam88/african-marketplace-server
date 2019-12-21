const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update
};

function find() {
    return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('users')
        .select('id', 'username', 'password')
        .where(filter);
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first();
}

function update(changes, id) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(count => {
            return findById(id);
        });

}