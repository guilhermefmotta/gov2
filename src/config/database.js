module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarbe',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
