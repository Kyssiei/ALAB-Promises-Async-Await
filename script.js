// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";



// central: database identifies which database the users are stored within
const val = await central(10);
// console.log(val); // returns-> db1


// db1, db2. db3: databases contain the user's basic information, including username, website, and company.
const val2 = await db1(4)
// console.log(val2);


// val: The personal data for each user is contained within the vault database since its access and usage is restricted by law.
const val3 = await vault(4);
// console.log(val3);


central(10).then(db => console.log(db))
db3(10).then(userBasicInfo => console.log(userBasicInfo))
vault(10).then(userPersonalInfo => console.log(userPersonalInfo))

console.log("=========================================");

//todo: check validity of id between 1-10
async function getUserData(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 10) throw new Error("Invalid Input -- Out of Range");

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  try {
    const dbName = await central(id);
    const userData = await dbs[dbName](id);
    console.log(userData);
    return userData;

  } catch (error) {
    console.error("Error:", error.message);
  };

};


getUserData(3);
getUserData(6);
getUserData(6);
