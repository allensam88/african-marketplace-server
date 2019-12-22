db = require('../data/db-config.js');

module.exports = {
    insert,
    find,
    findBy,
    findById,
    update,
    remove
};

function insert(item) {
    return db('hubs')
        .insert(item, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function find() {
    return db('hubs');
}

function findBy(filter) {
    return db('hubs')
        .where(filter)
}

function findById(id) {
    return db('hubs')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('hubs')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('hubs')
        .where({ id })
        .del();
}