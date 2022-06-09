const mongoose = require('mongoose');
const Trip = require('../models/trip.model');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1/node-api');

    const newTrip = await Trip.create({
        name: 'test trip',
        description: 'test description',
        destination: 'super city',
        category: 'family',
        start_date: '2022-06-08'
    })
    console.log(newTrip);
})();
