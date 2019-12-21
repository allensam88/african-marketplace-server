module.exports = {
  development: {
    client: 'pg',
    connection: { filename: './database/auth.db3' },
    pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex-migrations',
    },
    seeds: { directory: './database/seeds' },
  },
  testing: {
    client: 'pg',
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
