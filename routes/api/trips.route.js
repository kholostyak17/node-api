const router = require('express').Router();

const Trip = require('../../models/trip.model');


router.get('/', async (req, res)=>{
    // res.send('workinggg route / ok'); //return text/html !!!!!!!!!!!
    // res.json('workinggg route / ok'); //return json

    try{
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        res.status(500).json({error: 'It looks like there is a problem'});
    }

});

module.exports = router;