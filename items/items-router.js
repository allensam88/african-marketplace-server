const router = require('express').Router();
const Hubs = require('../models/hubs-model.js');

router.get('/', async (req, res) => {
    try {
        const items = await Hubs.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error, message: 'unable to get items' })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Hubs.findById(req.params.id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(400).json({ message: 'item cannot be found' })
        }
    } catch (error) {
        res.status(500).json({ error, message: 'unable to find item' });
    }
});

router.post('/', async (req, res) => {
    try {
        const item = await Hubs.insert(req.body);
        if (item) {
            res.status(201).json({ item, message: 'you have successfully added an item' });
        } else {
            res.status(400).json({ message: 'please include all required content' });
        }
    } catch (error) {
        res.status(500).json({ error, message: 'unable to add this item' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const item = await Hubs.update(req.params.id, req.body);
        if (item) {
            res.status(200).json({ item, message: 'info updated' });
        } else {
            res.status(404).json({ message: 'item could not be found' });
        } 
    } catch (error) {
        res.status(500).json({ error, message: 'unable to update this item' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await Hubs.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: "item deleted" });
        } else {
            res.status(404).json({ message: 'item unable to be deleted' });
        }
    } catch (error) {
        res.status(500).json({ error, message: 'unable to delete this item' });
    }
});

module.exports = router;