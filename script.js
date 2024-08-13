import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;


//DireNAME to locae the files
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());


//http configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});


//listen to the port number

app.listen(port, ()=>{
    console.log("Server is Running...");
})