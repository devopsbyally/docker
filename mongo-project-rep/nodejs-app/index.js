const { MongoClient } = require('mongodb');

// MongoDB URI from environment variable
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

// Database and Collection Names
const dbName = 'carDB';  // Change the database name to something more relevant
const collectionName = 'cars';  // Name of the collection to store car data

// Car data to insert
const jsonData = [
  { make: 'BMW', model: 'M5', year: 2024, msrp: 105000, monthlyLease: 879 },
  { make: 'Audi', model: 'A6', year: 2023, msrp: 65000, monthlyLease: 699 },
  { make: 'Tesla', model: 'Model S', year: 2024, msrp: 95000, monthlyLease: 799 }
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
      const existing = await collection.findOne({ make: document.make, model: document.model, year: document.year });
      if (existing) {
        console.log(`Document with make "${document.make}", model "${document.model}", and year "${document.year}" already exists. Skipping.`);
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