const express = require("express");
const app = express();
const mysql=require("mysql");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"cruddatabase",
});

app.get("/", (req ,res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('incption','good movie');";
    db.query(sqlInsert,(err,result)=>{
        res.send("hello sha");
    })
});
app.listen(3001, ()=>{
    console.log("running on port 3001");
});

