import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const database = mongoose.createConnection(`${process.env.MONGO_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

database.once('open', () => {
    console.log('Connected to Mongo Successfully!');
});

export default database;
