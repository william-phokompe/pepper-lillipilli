const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // Func used in the place of an express middleware func.
    // It will take incoming req and funnel them through 
    // the GraphQL parser and redirect them to relevant Resolvers
    graphqlHttp = require('express-graphql');

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.listen(5000);