require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'websocketdb',
  database: 'websocket',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
