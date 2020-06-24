const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://yuncong:UhjXNrPRwPuX5MP7@cluster0-zf9ju.mongodb.net/ninja-graphql?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log("connected to database")
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requrests on port 4000')
}); 
