const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const sqlz = require('./src/util/sequelize');

const port = process.env.APP_PORT;

app.listen(port, ()=>{
    console.log(`APP LISTENING ON ${port} PORT`);
})

app.get('/', async (req, res)=>{
    try {
        await sqlz.authenticate();
        res.json({
            state: true
        });
    
    } catch (err) {
        console.log(`
            name: ${err.name}
            message: ${err.message}
            stack: ${err.stack}
        `)
        res.json({
         state: false,
         error: err.name   
        })
    }})

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader;
    if (!token) return res.sendStatus(401)

    if (token == process.env.SECRET_KEY){
        next()
    }else{
        return res.sendStatus(401)
    }
}


app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.urlencoded({extended:false}));
app.use(verifyToken)