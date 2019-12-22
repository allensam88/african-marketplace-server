module.exports = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {filename: './database/market.db3'},
        migrations: {directory: './database/migrations'},
        seeds: {directory: './database/seeds'},
        pool: {
            afterCreate: (conn, done) => {conn.run('PRAGMA foreign_keys = ON', done);}
        }
    },
    testing: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {filename: './database/test.db3'},
        migrations: {directory: './database/migrations'},
        seeds: {directory: './database/seeds'}
    }
};
