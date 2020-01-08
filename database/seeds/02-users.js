const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
    return knex('users').insert([
        { username: 'Emma', password: bcrypt.hashSync('01234', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Dorothy', password: bcrypt.hashSync('56789', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Roberta', password: bcrypt.hashSync('abcd', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Edith', password: bcrypt.hashSync('efgh', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Susannah', password: bcrypt.hashSync('ijkl', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Leonard', password: bcrypt.hashSync('mnop', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Maria', password: bcrypt.hashSync('qrst', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Louisa', password: bcrypt.hashSync('uvwx', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Lisa', password: bcrypt.hashSync('yzab', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Paula', password: bcrypt.hashSync('cdef', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Anthony', password: bcrypt.hashSync('ghij', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Thomas', password: bcrypt.hashSync('klmn', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Cynthia', password: bcrypt.hashSync('opqr', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Kathleen', password: bcrypt.hashSync('stuv', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'James', password: bcrypt.hashSync('wxyz', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Georgia', password: bcrypt.hashSync('98765', 8), profileImg: 'https://tinyurl.com/k88p4we'},
        { username: 'Barbara', password: bcrypt.hashSync('43210', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Bill', password: bcrypt.hashSync('1357', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Hillary', password: bcrypt.hashSync('2468', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Michelle', password: bcrypt.hashSync('1111', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Barack', password: bcrypt.hashSync('2222', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Harry', password: bcrypt.hashSync('3333', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Meghan', password: bcrypt.hashSync('4444', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'William', password: bcrypt.hashSync('5555', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Kate', password: bcrypt.hashSync('6666', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Johanna', password: bcrypt.hashSync('7777', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Stephanie', password: bcrypt.hashSync('8888', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Julia', password: bcrypt.hashSync('9999', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Ophelia', password: bcrypt.hashSync('0101', 8), profileImg: 'https://tinyurl.com/k88p4we' },
        { username: 'Andrea', password: bcrypt.hashSync('hello', 8), profileImg: 'https://tinyurl.com/k88p4we' }
    ]);
};