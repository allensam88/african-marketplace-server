const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;

    // hash the password
    const hash = bcrypt.hashSync(user.password, 8); // the 8 is the number or round (2^8) iterations  

    // override the plaintext password with the hash
    user.password = hash


    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ message: `${user.username} is now logged in.`, token });
            } else {
                res.status(401).json({ message: 'invalid credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

const secret = process.env.JWT_SECRET || 'keep it secret, keep it safe!'

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options)
}

module.exports = router;
