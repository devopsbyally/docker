const { MongoClient } = require('mongodb');

// MongoDB URI from environment variable
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

// Database and Collection Names
const dbName = 'testdb';
const collectionName = 'testCollection';

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

    for (const document of jsonData) {
      // Check if the document already exists in the collection
      const existing = await collection.findOne({ name: document.name });
      if (existing) {
        console.log(`Document with name "${document.name}" already exists. Skipping.`);
      } else {
        // Insert the document if it doesn't exist
        const result = await collection.insertOne(document);
        console.log(`Inserted document: ${result.insertedId}`);
      }
    }

    // Fetch and log the inserted documents
    const documents = await collection.find().toArray();
    console.log('All Documents:', documents);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();

    // Keep the container running
    setInterval(() => {
      console.log('Container is still running...');
    }, 60 * 1000); // Logs a message every 60 seconds
  }
}

main().catch(console.error);
