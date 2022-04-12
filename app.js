const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');

app.use(express.json());

const schema = require('./Schema/index');

app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql : true
    })
)

app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(8000, () => {
    console.log("Server is Listening in port 8000");
})