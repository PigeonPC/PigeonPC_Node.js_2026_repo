import express from 'express';

const app = express();

import helmet from 'helmet';
app.use(helmet());


// *********************
// SESSION
// *********************
import session from 'express-session';
app.use(session({
    secret: 'keyboard cat', //put in .env
    resave: false, //Hvis der ikke er sket en ændring, så gem ikke session igen.
    saveUninitialized: false, //
    cookie: { secure: false } //Skal køre over https for at være secure!
}));



// *********************
// RATE LIMIT
// *********************
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes // Efter 15 min resettes den
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    // store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);

const authenticationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes // Efter 15 min resettes den
    limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    // store: ... , // Redis, Memcached, etc. See below.
});

app.use('/auth', authenticationLimiter);



// *********************
// ROUTERS
// *********************
import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);

import authRouter from './routers/authRouter.js';
app.use(authRouter);

import sessionRouter from './routers/sessionRouter.js';
app.use(sessionRouter);



// *********************
// SPLAT
// *********************
app.get("/{*splat}", (req, res) => {
    res.send(`
        <h1>404<h1>
        <h3>Not Found</h3>
        `);
});

app.all("/{*splat}", (req, res) => {
    res.status(404).send({ data: "The route doesn't exist" });
})


// *********************
// PORT OG SERVER
// *********************
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});