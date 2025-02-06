// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');
// const cron = require('node-cron');
// const { exec } = require('child_process');
// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/sydney-events', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const Event = require('./models/Events'); 

// const event = [
//     { title: 'Sydney Music Festival', date: '2025-03-15', location: 'Sydney Opera House', description: 'A grand musical night.', link: 'https://example.com/event1' },
//     { title: 'Tech Expo Sydney', date: '2025-04-10', location: 'ICC Sydney', description: 'Explore the latest in tech.', link: 'https://example.com/event2' },
//     { title: 'Food & Wine Fair', date: '2025-05-05', location: 'Darling Harbour', description: 'A feast of flavors.', link: 'https://example.com/event3' }
// ];

// // // Middleware
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// cron.schedule('0 0 * * *', () => {
//     console.log('Running daily event scraper...');
//     exec('node scraper.js', (err, stdout, stderr) => {
//         if (err) {
//             console.error(`Error: ${err}`);
//             return;
//         }
//         console.log(stdout);
//     });
// });

// // // Routes
// // app.get('/', async (req, res) => {
// //     const events = await Event.find({});
// //     res.render('index', { events }); 
// // });

// app.post('/get-tickets', (req, res) => {
//     const { email, eventLink } = req.body;
//     // Save email logic here or send a confirmation
//     res.redirect(eventLink);
// });
// // app.get('/', (req, res) => {
// //     res.send('Hello World');
// // });

// app.get('/', (req, res) => {
//     res.render('index', { events: events, page: 'home' });
// });

// // About Page
// app.get('/about', (req, res) => {
//     res.render('index', { page: 'about' });
// });

// // Contact Page
// app.get('/contact', (req, res) => {
//     res.render('index', { page: 'contact' });
// });

// // Handle Contact Form Submission
// app.post('/contact', (req, res) => {
//     const { name, email, message } = req.body;
//     console.log(`Contact Form Submitted: Name: ${name}, Email: ${email}, Message: ${message}`);
//     res.render('index', { page: 'thankyou' });
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 7000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Sample Event Data (Replace with Scraped Data)
// const events = [
//     { title: 'Sydney Music Festival', date: '2025-03-15', location: 'Sydney Opera House', description: 'A grand musical night.', link: 'https://example.com/event1' },
//     { title: 'Tech Expo Sydney', date: '2025-04-10', location: 'ICC Sydney', description: 'Explore the latest in tech.', link: 'https://example.com/event2' },
//     { title: 'Food & Wine Fair', date: '2025-05-05', location: 'Darling Harbour', description: 'A feast of flavors.', link: 'https://example.com/event3' }
// ];

// Routes

// Home Page
app.get('/', (req, res) => {
    const events = [
        { title: 'Sydney Music Festival', date: '2025-03-15', location: 'Sydney Opera House', description: 'A grand musical night.', link: 'https://example.com/event1' },
        { title: 'Tech Expo Sydney', date: '2025-04-10', location: 'ICC Sydney', description: 'Explore the latest in tech.', link: 'https://example.com/event2' },
        { title: 'Food & Wine Fair', date: '2025-05-05', location: 'Darling Harbour', description: 'A feast of flavors.', link: 'https://example.com/event3' }
    ];

    res.render('index', { events: events });
});


// About Page
app.get('/about', (req, res) => {
    res.render("about"); 
});

// Contact Page
app.get('/contact', (req, res) => {
    res.render("contact");
});
  
// Handle Contact Form Submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Form Submitted: Name: ${name}, Email: ${email}, Message: ${message}`);
    res.render("thankyou");
});

// Handle GET TICKETS Form Submission
app.post('/get-tickets', (req, res) => { 
    const { email, eventLink } = req.body;
    console.log(`Email: ${email} requested tickets for: ${eventLink}`);
    res.render("get-tickets", { email, eventLink });

    // Redirect after 3 seconds to the event link
    setTimeout(() => {
        res.redirect(eventLink); 
    }, 7000);
});
 
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});