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
    const result = await userCollection.insertMany(
        [
            {
                Name : "Azad1",
                LastName : "Waisi1",
                Age : 34,
                skile : ["backEnd1","NodeJs1","MongoDB1","ASP.NetCore1"],
                identity : "1235434563567",
                birthDay : new Date("1988-12-20"),
                address : {
                    province : "Kordestan1",
                    city : "sanandaj1",
                    street : "azadi1"
                }
            },
            {
                Name : "Azad2",
                LastName : "Waisi2",
                Age : 34,
                skile : ["backEnd2","NodeJs2","MongoDB2","ASP.NetCore2"],
                identity : "1235434563567",
                birthDay : new Date("1988-12-20"),
                address : {
                    province : "Kordestan2",
                    city : "sanandaj2",
                    street : "azadi2"
                }
            },
            {
                Name : "Azad3",
                LastName : "Waisi3",
                Age : 34,
                skile : ["backEnd3","NodeJs3","MongoDB3","ASP.NetCore3"],
                identity : "1235434563567",
                birthDay : new Date("1988-12-20"),
                address : {
                    province : "Kordestan3",
                    city : "sanandaj3",
                    street : "azadi3"
                }
            }
        ]
    );
    console.log("Inserted Document => ", result);
    userCollection.count({}).then(count =>{
        console.log(count);
    });
    userCollection.countDocuments({}).then(res =>{
        console.log(res);
    });
    //console.log(userCollection);
}

main();