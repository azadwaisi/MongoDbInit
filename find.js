const { MongoClient , ObjectId } = require("mongodb");

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
    //const result = await userCollection.find({}).toArray();
    //const result = await userCollection.find({birthDay : {$gte : new Date("1980-01-01")}}).toArray();
    //const result = await userCollection.find({birthDay : {$lte : new Date("2000-01-01")}}).toArray();


    //const result = await userCollection.find({"address.street" : {$in : ['azadi3','hasanAva']}}).toArray();
    //const result = await userCollection.find({_id : {$in : [new ObjectId("64796d9da8b348205e8c6d17"),new ObjectId("647a15367e4b3f510c1edfa6")]}}).toArray();
    const result = await userCollection.findOne({Name:"Azad3"});

    //const result = await userCollection.deleteOne({_id:new ObjectId("64796d9becc94e4918c4f64f")});

    console.log("Find All => ", result);
}

main();