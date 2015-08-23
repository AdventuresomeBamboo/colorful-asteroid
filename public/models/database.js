var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE IF NOT EXISTS topics(id serial NOT NULL,text character varying(160) NOT NULL,vote integer NOT NULL,CONSTRAINT topics_pkey PRIMARY KEY (id));');

module.exports = client;