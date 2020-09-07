const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'))

app.use(express.json());

app.use("/api/karta", routes)

app.listen(process.env.PORT || '3000', () => {
    console.log(`Running on port: ${process.env.PORT || '3000'}`);
});

