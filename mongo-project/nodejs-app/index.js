const { MongoClient } = require('mongodb');

// MongoDB URI from environment variable
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

// Database and Collection Names
const dbName = 'first_db';
const collectionName = 'score';

// JSON data to insert
const jsonData = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' }
];

async function main() {
  const client = new MongoClient(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB!');

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert JSON data into the collection
    const result = await collection.insertMany(jsonData);
    console.log(`${result.insertedCount} documents inserted successfully!`);

    // Fetch and log the inserted documents
    const documents = await collection.find().toArray();
    console.log('Inserted Documents:', documents);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
