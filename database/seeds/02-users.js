const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
    return knex('users').insert([
        { id: 1, username: 'Emmanuel', password: bcrypt.hashSync('01234', 8) },
        { id: 2, username: 'Dorothy', password: bcrypt.hashSync('56789', 8) },
        { id: 3, username: 'Robert', password: bcrypt.hashSync('abcd', 8) },
        { id: 4, username: 'Edith', password: bcrypt.hashSync('efgh', 8) },
        { id: 5, username: 'Steven', password: bcrypt.hashSync('ijkl', 8) },
        { id: 6, username: 'Leonard', password: bcrypt.hashSync('mnop', 8) },
        { id: 7, username: 'Michael', password: bcrypt.hashSync('qrst', 8) },
        { id: 8, username: 'Louis', password: bcrypt.hashSync('uvwx', 8) },
        { id: 9, username: 'Lisa', password: bcrypt.hashSync('yzab', 8) },
        { id: 10, username: 'Paul', password: bcrypt.hashSync('cdef', 8) },
        { id: 11, username: 'Anthony', password: bcrypt.hashSync('ghij', 8) },
        { id: 12, username: 'Thomas', password: bcrypt.hashSync('klmn', 8) },
        { id: 13, username: 'Cynthia', password: bcrypt.hashSync('opqr', 8) },
        { id: 14, username: 'Kathleen', password: bcrypt.hashSync('stuv', 8) },
        { id: 15, username: 'James', password: bcrypt.hashSync('wxyz', 8) },
        { id: 16, username: 'George', password: bcrypt.hashSync('98765', 8) },
        { id: 17, username: 'Barbara', password: bcrypt.hashSync('43210', 8) },
        { id: 18, username: 'Bill', password: bcrypt.hashSync('1357', 8) },
        { id: 19, username: 'Hillary', password: bcrypt.hashSync('2468', 8) },
        { id: 20, username: 'Michelle', password: bcrypt.hashSync('1111', 8) },
        { id: 21, username: 'Barack', password: bcrypt.hashSync('2222', 8) },
        { id: 22, username: 'Harry', password: bcrypt.hashSync('3333', 8) },
        { id: 23, username: 'Meghan', password: bcrypt.hashSync('4444', 8) },
        { id: 24, username: 'William', password: bcrypt.hashSync('5555', 8) },
        { id: 25, username: 'Kate', password: bcrypt.hashSync('6666', 8) },
        { id: 26, username: 'John', password: bcrypt.hashSync('7777', 8) },
        { id: 27, username: 'Richard', password: bcrypt.hashSync('8888', 8) },
        { id: 28, username: 'Julia', password: bcrypt.hashSync('9999', 8) },
        { id: 29, username: 'Owen', password: bcrypt.hashSync('0101', 8) },
        { id: 30, username: 'Andrew', password: bcrypt.hashSync('hello', 8) }
    ]);
};