const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Event = require('./models/Event');

mongoose.connect('mongodb://localhost:27017/sydney-events', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const scrapeEvents = async () => {
    try {
        const { data } = await axios.get('https://www.example-event-site.com/sydney');
        const $ = cheerio.load(data);
        
        await Event.deleteMany({});  // Clear previous data

        $('.event-card').each(async (i, elem) => {
            const title = $(elem).find('.event-title').text().trim();
            const date = $(elem).find('.event-date').text().trim();
            const location = $(elem).find('.event-location').text().trim();
            const description = $(elem).find('.event-description').text().trim();
            const link = $(elem).find('.get-tickets').attr('href');

            const event = new Event({ title, date, location, description, link });
            await event.save();
        });

        console.log('Scraping Complete');
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
};

scrapeEvents();
