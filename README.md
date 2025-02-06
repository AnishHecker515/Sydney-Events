Sydney Events Scraper & Web Display

Project Overview

This project is a web application that scrapes event listings in Sydney, Australia, and displays them dynamically using EJS templates. Users can view events and purchase tickets by entering their email before being redirected to the event's original website.

Features

Automatically scrapes and updates event listings every 24 hours.

Displays event details dynamically using EJS.

Users can click the "GET TICKETS" button, enter their email, and be redirected to the event page.

Includes a home page, about page, contact page, and thank you page.

Setup Instructions

Prerequisites

Node.js installed on your system

MongoDB (optional, if storing user emails for future use)

npm package manager

Installation Steps

Clone the Repository:

git clone https://github.com/your-repo/sydney-events.git
cd sydney-events

Install Dependencies:

npm install

Run the Web Scraper:

node scraper.js

(This will fetch event data and store it locally.)

Start the Server:

npm start

The application will be running at http://localhost:3000

Project Approach

The project follows a structured methodology:

Web Scraping: Data is collected from event websites using a web scraper (e.g., Puppeteer or Cheerio).

Data Processing: Extracted event details (title, date, location, description, and link) are stored in memory or a database.

Dynamic Web Display: EJS templates render event data dynamically on the frontend.

User Interaction: Users can request tickets by submitting their email before being redirected to the original event website.

Automation: A cron job automates the web scraping process every 24 hours to keep data updated.

Challenges Faced

Handling Dynamic Websites: Some event websites use JavaScript rendering, requiring Puppeteer instead of Cheerio.

Rate Limiting: Scraping frequently led to temporary blocks from event sites, which was mitigated by setting user-agent headers and delays.

Data Consistency: Ensuring that scraped data remains accurate and up to date posed challenges that were addressed with validation checks.

Email Collection: Handling user email submissions securely while ensuring compliance with privacy regulations.

Future Improvements

Database Integration: Store event data persistently using MongoDB instead of relying on memory.

Improved UI: Enhance the design with better styling and filtering options for users.

Real-time Scraping: Implement an API that fetches events on demand instead of relying on pre-scraped data.

Email Notifications: Allow users to subscribe to event alerts via email.
