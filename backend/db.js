const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'dhivsdb';
const COLLECTION_NAME = 'vouchers';

async function initDatabase() {
    try {
        const db_client = new MongoClient(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await db_client.connect();
        return db_client;

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

async function getCollection(client, collection_name = COLLECTION_NAME) {
    const db = client.db(DB_NAME);
    const collection = db.collection(collection_name);
    return collection;
}

module.exports = {
    initDatabase,
    getCollection,
}
