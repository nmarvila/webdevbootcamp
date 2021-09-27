const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '615219012773d7172c3d09fe',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ratione. Placeat aliquam eos fuga laborum cumque cum, eligendi recusandae eveniet in. Nostrum sit, voluptate laborum dolor laboriosam sint voluptatem ipsa?',
            price,
            geometry: {
                type: "Point",
                coordinates: [-113.1331, 47.0202]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/nmarvila/image/upload/v1632750572/YelpCamp/nmapridrtckafoslgxcl.png',
                    filename: 'YelpCamp/nmapridrtckafoslgxcl'
                },
                {
                    url: 'https://res.cloudinary.com/nmarvila/image/upload/v1632750572/YelpCamp/xqpsmqp65c0bcouqd3i6.png',
                    filename: 'YelpCamp/xqpsmqp65c0bcouqd3i6'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})