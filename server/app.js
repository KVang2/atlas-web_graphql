const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../server/schema/schema');
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://<Kevin Vang>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});