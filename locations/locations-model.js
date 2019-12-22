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
    return db('locations')
        .insert(item, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function find() {
    return db('locations');
}

function findBy(filter) {
    return db('locations')
        .where(filter)
}

function findById(id) {
    return db('locations')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('locations')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('locations')
        .where({ id })
        .del();
}