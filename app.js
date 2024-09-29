const express = require("express");
const router = require("./src/routes/api")
const app = express();

//TODO security middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");


//TODO use security middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


//TODO  request rete limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false,
    // store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter)

app.use("/api/v1", router);

app.use('*', (req, res) => {
    res.status(404).json({
        status: 'fail', data: 'not found'
    })
});

module.exports = app;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://raysulmern:raysulmern2024@cluster0.gyysv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
