exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 128).notNullable().unique();
        tbl.integer('location_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('locations')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};