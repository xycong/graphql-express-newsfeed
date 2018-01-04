const { Logger, MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';

module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);

  let logCount = 0;
  Logger.setCurrentLogger((msg, state) => {
    console.log(`MONGO DB REQUEST ${++logCount}: ${msg}`);
  });
  Logger.setLevel('debug');
  Logger.filter('class', ['Cursor']);

  _db = db.db('hackernews');
  return {
    Links: _db.collection('links'),
    Users: _db.collection('users'),
    Votes: _db.collection('votes'),
  };
}