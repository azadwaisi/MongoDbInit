const { MongoClient } = require("mongodb");

const DB_URL = "mongodb://127.0.0.1:27017";
const DB_Name = "mongodb-tutorials";
console.log("connected 0");
const client  = new MongoClient(DB_URL);
async function main(){
    console.log("connected 1");
    await client.connect();
    console.log("connected to mongo db");
    const db = client.db(DB_Name); // be db mtsel mishawad agar vjod ndashte bashad ijad mikonad
    const userCollection = db.collection("users");
    const result = await userCollection.insertOne({
        Name : "Azad",
        LastName : "Waisi",
        Age : 34,
        skile : ["backEnd","NodeJs","MongoDB","ASP.NetCore"],
        identity : "1235434563567",
        birthDay : new Date("1988-12-20"),
        address : {
            province : "Kordestan",
            city : "sanandaj",
            street : "azadi"
        }
    });
    console.log("Inserted Document => ", result);
    userCollection.find({}).toArray().then(res =>{
        console.log(res);
    });
    //console.log(userCollection);
}

main();