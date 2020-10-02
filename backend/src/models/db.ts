import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

const database = mongoose.createConnection(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

database.once('open', () => {
    console.log('Connected to Mongo Successfully!');
});

export default database;
