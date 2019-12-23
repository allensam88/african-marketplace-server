const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
    return cleaner.clean(knex, {
        mode: 'delete',
        restartIdentity: true,
        ignoreTables: ['dbmigrations', 'dbmigrations_lock'],
    });
};