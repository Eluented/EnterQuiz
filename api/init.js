const { MongoClient } = require('mongodb'); //get mongoclient from mongodb library

const connectionUrl = process.env.DB_CONNECTION;

const init = async () => {
  //async as connecting to an external resource
  let client = await MongoClient.connect(connectionUrl); //wait for mongo to connect to db
  return client.db(process.env.DB_NAME);
};
//anyone who imports me can connect and talk to db

module.exports = { init };
