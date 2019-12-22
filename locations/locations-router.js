const router = require('express').Router();
const Locations = require('../locations/locations-model.js');

router.get('/', async (req, res) => {
    try {
        const locations = await Locations.find();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ error, message: 'unable to get locations' })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const location = await Locations.findById(req.params.id);
        if (location) {
            res.status(200).json(location);
        } else {
            res.status(400).json({ message: 'location cannot be found' })
        }
    } catch (error) {
        res.status(500).json({ error, message: 'unable to find location' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newLocation = await Locations.insert(req.body);
        if (newLocation) {
            res.status(201).json({ newLocation, message: 'you have successfully added a new location' });
        } else {
            res.status(400).json({ message: 'please include all required content' });
        }
    } catch (error) {
        res.status(500).json({ error, message: 'unable to add this location' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedLocation = await Locations.update(req.params.id, req.body);
        if (updatedLocation) {
            res.status(200).json({ updatedLocation, message: 'info updated' });
        } else {
            res.status(404).json({ message: 'location could not be found' });
        } 
    } catch (error) {
        res.status(500).json({ error, message: 'unable to update this location' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await Locations.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: "location deleted" });
        } else {
            res.status(404).json({ message: 'location could not be found' });
        }
    } catch (error) {
        res.status(500).json({ error, message: 'unable to delete this location' });
    }
});

module.exports = router;