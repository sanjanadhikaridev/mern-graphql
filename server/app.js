const express = require('express');
const graphqlHTTP = require('express-graphql');


//dummy data
var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
]

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000, () => {
    console.log('now listening for requrests on port 4000')
}); 