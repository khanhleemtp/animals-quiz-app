const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.post('/', (req, res) => {
    const { name, score } = req.body;
    
    // simple validation
    if(!name) {
        return res.status(400).json({ msg: 'Please enter your name'});
    }
    const newUser = new User({
        name, score
    });
    newUser.save()
            .then( user => res.json({ name: user.name, success: true, id: user._id }))
            .catch( err => res.json({ err }))
})

router.get('/', (req, res) => {
    User.find()
        .sort({ score: -1 })
        .limit(5)
        .then( data => res.json({ data }))
        .catch( err => console.log(err))
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const user = User.findById(id, function (err, doc) {
        if(err) return res.json({ err });
        doc.score = req.body.score;
        doc.save()
    });
})

module.exports = router;