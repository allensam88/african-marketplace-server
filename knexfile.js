module.exports = {
    development: {
        client: 'sqlite3',
        connection: { filename: './database/market.db3' },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations',
            tableName: 'dbmigrations',
        },
        seeds: { directory: './database/seeds' },
        pool: {
            afterCreate: function (connection, done) {
                connection.run('PRAGMA foreign_keys = ON', done)
            }
        }
    },
    testing: {
        client: 'sqlite3',
        connection: {
            filename: './database/test.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        }
    }
};