// import { MongoClient } from "mongodb";
// import { MONGO_URI } from "./config.database.js";

const { MongoClient } = require("mongodb");
const { MONGO_URI } = require("./config.database.js");

const addDocument = async (documentToAdd) => {
    const client = await MongoClient.connect(MONGO_URI);

    const db = client.db("FantBachLeague");

    const collection = db.collection("weeklyEvents");

    return await collection.insertOne(documentToAdd);
};

const addDocuments = async (documentToAdd) => {
    const client = await MongoClient.connect(MONGO_URI);

    const db = client.db("FantBachLeague");

    const collection = db.collection("contestants");

    return await collection.insertMany(documentToAdd);
};

const deleteMany = async (filter) => {
    const client = await MongoClient.connect(MONGO_URI);

    const db = client.db("FantBachLeague");

    const collection = db.collection("weeklyEvents");

    return await collection.deleteMany({
        week: {
            $exists: false,
        },
    });
};

const getDocuments = async (collectionName, filter = {}) => {
    const client = await MongoClient.connect(MONGO_URI);

    const db = client.db("FantBachLeague");

    const collection = db.collection(collectionName);

    return collection.find(filter).toArray();
};

module.exports = {
    addDocument,
    addDocuments,
    deleteMany,
    getDocuments,
};
