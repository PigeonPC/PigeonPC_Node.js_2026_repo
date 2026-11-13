import { Router } from 'express';

const router = Router();

// authentication: Proving you are who you are
// authorization: Deciding who are allowed. Proving you have permission to access certain resources.

function isAdmin(req, res, next) {
    // this simulates getting data from the database
    // ...
    const isAdmin = true;
    if (isAdmin) {
        next();
    }
    res.status(403).send();
}

router.get('/auth/dashboard', isAdmin, (req, res) => {
    res.send({ data: "Secret Dashboard" });
})




export default router;