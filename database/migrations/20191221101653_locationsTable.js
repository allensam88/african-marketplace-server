exports.up = function(knex) {
    return knex.schema.createTable('locations', tbl => {
        tbl.increments();

        tbl.string('location', 128).notNullable().unique();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations');
};