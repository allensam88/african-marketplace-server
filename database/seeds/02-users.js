const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
    return knex('users').insert([
        { username: 'Emmanuel', password: bcrypt.hashSync('01234', 8) },
        { username: 'Dorothy', password: bcrypt.hashSync('56789', 8) },
        { username: 'Robert', password: bcrypt.hashSync('abcd', 8) },
        { username: 'Edith', password: bcrypt.hashSync('efgh', 8) },
        { username: 'Steven', password: bcrypt.hashSync('ijkl', 8) },
        { username: 'Leonard', password: bcrypt.hashSync('mnop', 8) },
        { username: 'Michael', password: bcrypt.hashSync('qrst', 8) },
        { username: 'Louis', password: bcrypt.hashSync('uvwx', 8) },
        { username: 'Lisa', password: bcrypt.hashSync('yzab', 8) },
        { username: 'Paul', password: bcrypt.hashSync('cdef', 8) },
        { username: 'Anthony', password: bcrypt.hashSync('ghij', 8) },
        { username: 'Thomas', password: bcrypt.hashSync('klmn', 8) },
        { username: 'Cynthia', password: bcrypt.hashSync('opqr', 8) },
        { username: 'Kathleen', password: bcrypt.hashSync('stuv', 8) },
        { username: 'James', password: bcrypt.hashSync('wxyz', 8) },
        { username: 'George', password: bcrypt.hashSync('98765', 8) },
        { username: 'Barbara', password: bcrypt.hashSync('43210', 8) },
        { username: 'Bill', password: bcrypt.hashSync('1357', 8) },
        { username: 'Hillary', password: bcrypt.hashSync('2468', 8) },
        { username: 'Michelle', password: bcrypt.hashSync('1111', 8) },
        { username: 'Barack', password: bcrypt.hashSync('2222', 8) },
        { username: 'Harry', password: bcrypt.hashSync('3333', 8) },
        { username: 'Meghan', password: bcrypt.hashSync('4444', 8) },
        { username: 'William', password: bcrypt.hashSync('5555', 8) },
        { username: 'Kate', password: bcrypt.hashSync('6666', 8) },
        { username: 'John', password: bcrypt.hashSync('7777', 8) },
        { username: 'Richard', password: bcrypt.hashSync('8888', 8) },
        { username: 'Julia', password: bcrypt.hashSync('9999', 8) },
        { username: 'Owen', password: bcrypt.hashSync('0101', 8) },
        { username: 'Andrew', password: bcrypt.hashSync('hello', 8) }
    ]);
};