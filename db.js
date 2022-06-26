const { MongoClient, ServerApiVersion } = require('mongodb');
const assert = require('assert');

// MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const MONGO_URL = `mongodb+srv://admin:${process.env.DHIVS_MONGO_ID}@cluster0.eqx3d.mongodb.net/?retryWrites=true&w=majority`
const DB_NAME = 'Cluster0';
const COLLECTION_NAME = 'vouchers';

async function initDatabase() {
    try {
        const db_client = new MongoClient(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });

        await db_client.connect();
        console.log("Connected to Mongo Atlas")
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
