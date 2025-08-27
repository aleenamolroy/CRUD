import { MongoClient, ObjectId} from 'mongodb'
const uri = 'mongodb://127.0.0.1:27017/'
const client = new MongoClient(uri)
let UserCollection;
async function connectDB() {
    try {
        await client.connect()
        console.log("Connected to mongodb")
        const db = client.db('MyDB')
        UserCollection = db.collection('users')
        return client;
    }
    catch (err) {
        console.log(err)
    }

}
connectDB();
export {connectDB,UserCollection};