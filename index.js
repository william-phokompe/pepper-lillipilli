const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // Func used in the place of an express middleware func.
    // It will take incoming req and funnel them through 
    // the GraphQL parser and redirect them to relevant Resolvers
    graphqlHttp = require('express-graphql'),
    { buildSchema } = require('graphql'); // User object desctructuring to get specific objects

app.use(bodyParser.json());

// GraphQL Middleware function setup
app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            # Enforce return type and events return a list of strings not nullible
            events: [String!]!
        }

        type RootMutation {
            createEvent(name: String) : String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        // This will be called when an incoming request, requests a query
        events: () => {
            return ['Romantic Cooking', 'Sailing', 'All-night Coding'];
        },
        createEvent: (args) => {
                const eventName = args.name;
                return eventName;
            } // Mutation callback function
    }, // Contains all resolver functions
    graphiql: true
}));
app.listen(5000);