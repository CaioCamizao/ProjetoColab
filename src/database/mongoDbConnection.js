const { mongoClient, MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb:/127.0.0.1:27017';
const DB_NAME = 'user';

const connection = () => MongoClient.connect(MONGO_DB_URL, {
    useNewParser: true,
    useUnifiedTropology: true,
})
.then((conn) => conn.db(DB_NAME))
.catch((err) => {
    console.error(err);
    process.exit(1);
});

module.exports = connection;
