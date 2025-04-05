const sqlite3 = require('sqlite3').verbose();
const { faker } = require('@faker-js/faker');

const DB_FILE = 'large_data.db'; // SQLite database file
const TOTAL_RECORDS = 10_00_00_00; // 10 crore
const BATCH_SIZE = 499; // Reduced batch size to avoid exceeding variable limits

// Connect to SQLite
const db = new sqlite3.Database(DB_FILE, (err) => {
    if (err) {
        console.error('Error connecting to SQLite:', err.message);
        return;
    }
    console.log('Connected to SQLite database.');
});

// Create table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT
        )
    `, (err) => {
        if (err) console.error('Error creating table:', err.message);
    });
});

// Function to insert data in batches
async function insertData() {
    let totalInserted = 0;
    console.log('Inserting records...');

    for (let i = 0; i < TOTAL_RECORDS; i += BATCH_SIZE) {
        let values = [];
        let placeholders = [];

        for (let j = 0; j < BATCH_SIZE; j++) {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            values.push(firstName, lastName);
            placeholders.push('(?, ?)');
        }

        const sql = `INSERT INTO users (first_name, last_name) VALUES ${placeholders.join(', ')}`;

        db.run(sql, values, function (err) {
            if (err) {
                console.error('Insert Error:', err.message);
            }
        });

        totalInserted += BATCH_SIZE;
        console.log(`Inserted: ${totalInserted}/${TOTAL_RECORDS}`);
    }

    console.log('Data insertion completed.');
    db.close();
}

// Run the insert function
insertData();
