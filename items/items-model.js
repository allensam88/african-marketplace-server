db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    insert,
    update,
    remove
};



function find() {
    return db('items')
        .join('users', 'items.user_id', 'users.id')
        .select('items.id', 'items.name', 'items.description', 'items.price', 'items.category', 'items.location', 'users.username as owner')
        .orderBy('items.id')
}

function findBy(filter) {
    return db('items')
        .where(filter)
}

function findById(id) {
    return db('items')
        .join('users', 'items.user_id', 'users.id')
        .select('items.name', 'items.description', 'items.price', 'items.category', 'items.location', 'users.username as owner')
        .where('items.id', id)
        .first();
}

function insert(item) {
    return db('items')
        .insert(item, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function update(id, changes) {
    return db('items')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('items')
        .where({ id })
        .del();
}