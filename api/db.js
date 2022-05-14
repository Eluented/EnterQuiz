const { MongoClient } = require('mongodb');

let dbConnection;

const mongodbURI = 'mongodb+srv://ooga:booga@cluster0.vduct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(mongodbURI)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })
    },
    getDb: () => dbConnection
}