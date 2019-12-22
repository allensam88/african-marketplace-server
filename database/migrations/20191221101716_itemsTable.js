exports.up = function (knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 4000);
        tbl.integer('price').notNullable();
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
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
    return knex.schema.dropTableIfExists('items');
};