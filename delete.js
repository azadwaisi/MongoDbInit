const { MongoClient , ObjectId } = require("mongodb");

const DB_URL = "mongodb://127.0.0.1:27017";
const DB_Name = "mongodb-tutorials";
console.log("connected 0");
const client  = new MongoClient(DB_URL);
async function main(){
    console.log("connected 1");
    await client.connect();
    console.log("connected to mongo db");
    // const db = client.db(DB_Name); // be db mtsel mishawad agar vjod ndashte bashad ijad mikonad
    // const userCollection = db.collection("users");
    // const result = await userCollection.deleteOne({Name:"Azad"});
    //const result = await userCollection.deleteOne({_id:new ObjectId("64796d9becc94e4918c4f64f")});
    console.log(new ObjectId(new Date().getTime()))
    console.log(new ObjectId(new Date().getTime()/1000))
    console.log(new ObjectId(new Date().getTime()).getTimestamp())
    console.log(new ObjectId(new Date().getTime()/1000).getTimestamp())

    //console.log("Inserted Document => ", result);
}

main();