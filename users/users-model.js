const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    findUserItems,
    insert,
    update,
    remove
};

function find() {
    return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('users')
        .select('id', 'username', 'password')
        .where(filter);
}

function findById(id) {
    return db('users')
        .select('id', 'username', 'password')
        .where({ id })
        .first();
}

function findUserItems(id) {
    return db('users')
        .join('items', 'users.id', 'items.user_id')
        .select('users.username', 'items.name', 'items.description', 'items.price', 'items.category', 'items.location')
        .where('users.id', id)
}

function insert(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('users')
        .where({ id })
        .del();
}