const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // Func used in the place of an express middleware func.
    // It will take incoming req and funnel them through 
    // the GraphQL parser and redirect them to relevant Resolvers
    graphqlHttp = require('express-graphql'),
    {} = require(); // 

app.use(bodyParser.json());

// GraphQL Middleware function setup
app.use('/graphql', graphqlHttp({
    schema: null,
    rootValue: {} // Contains all resolver functions
}));
app.listen(5000);