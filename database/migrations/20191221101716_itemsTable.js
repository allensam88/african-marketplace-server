exports.up = function (knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 4000);
        tbl.integer('price');
        tbl.string('category', 255);
        tbl.string('location', 255);
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('items');
};