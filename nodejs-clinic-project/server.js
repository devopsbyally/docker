const express = require('express');
const path = require('path');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// PostgreSQL client connection
const client = new Client({
    user: 'admin',
    host: 'postgres-container1',
    database: 'clinic_db',
    password: 'admin123',
    port: 5432,
});

client.connect();

// Route to handle form submission and insert into PostgreSQL
app.post('/submit-appointment', (req, res) => {
    const { name, age, email, phone, description } = req.body;

    // SQL query to insert appointment data
    const query = `
        INSERT INTO appointments (name, age, email, phone, description) 
        VALUES ($1, $2, $3, $4, $5)
    `;

    client.query(query, [name, age, email, phone, description], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error inserting data into the database.');
        } else {
            res.send('Appointment submitted successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});