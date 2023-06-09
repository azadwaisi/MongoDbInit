const { MongoClient, ObjectId } = require("mongodb");

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
    const result = await userCollection.updateOne({_id : new ObjectId("64796d9da8b348205e8c6d17")}, {$set : {Age : 35} });

    console.log("Upadte Document => ", result);
}

main();