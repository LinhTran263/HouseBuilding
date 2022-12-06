let express = require("express");
let app = express();
app.use(express.json());
let port = process.env.PORT || 3000;

//connecting to quickmongo
const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://project3:project3@project3.uxb6pkg.mongodb.net/?retryWrites=true&w=majority");
db.on("ready", () => {
    console.log("Connected to the database");
});
db.connect();

app.use("/", express.static("building"));

app.post("/houses", (req,res) => {
    db.push("userHouses", req.body);
    db.get("userHouses").then(houseData =>{
        console.log(houseData);
    })
})

app.get("/houses", (req,res) => {
    db.get("userHouses").then(houseData =>{
        let obj = {data: houseData};
        res.json(obj);
    })
  })

app.listen(port, ()=>{
    console.log("server is runing on port " + port)
})