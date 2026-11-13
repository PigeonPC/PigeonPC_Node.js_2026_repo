import { Router } from 'express';

const router = Router();


function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

router.use("/room", ipLogger);

function butler (req, res, next) {
    //console.log("Hello i am the butler");
    if(req.query.name?.toLowerCase() === "steve") {
        return res.send({ data: "You are not allowed in, Steve"});
    }

    //I can add things to my req, so i could make a database call below
    // ... simulating data call to retrieve user info
    // and then populate it to the reauest handler
    req.coatCondition = "off";
    next();
}

function doorway(req, res, next) {
    console.log("Come on in");
    next();
};



router.get("/room", butler, doorway, (req, res, next) => {
    console.log("You are in the hallway, and your coat is", req.coatCondition);
    next();
}, (req, res, next) => {
    //res.send({ data: "You are in room 1"});
    console.log("You are in room 1");
    next();
});


router.get("/room", (req, res) => {
    res.send({ data: "You are in room 2" });

});


export default router;