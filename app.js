import express from 'express'
// import { MongoClient, ObjectId} from 'mongodb'
// import loginRoute from './routes/userRouter.js'
import crudRoute from './routers/userRouters.js'
const app = express()
app.use(express.json())
const port = 3001
// const uri = 'mongodb://127.0.0.1:27017/'
// const client = new MongoClient(uri)
// let UserCollection;
// async function connectDB() {
//     try {
//         await client.connect()
//         console.log("Connected to mongodb")
//         const db = client.db('MyDB')
//         UserCollection = db.collection('users')
//         return client;
//     }
//     catch (err) {
//         console.log(err)
//     }

// }
// connectDB();
// export {connectDB,UserCollection};
app.use(crudRoute)
//insert
// app.post('/addUser', async (req, res) => {
//     const result = await UserCollection.insertOne(req.body);
//     res.send(result)
// })
// //retrive
// app.get('/users', async (req, res) => {
//     // const users = await UserCollection.find(req.body).toArray()
//     const users = await UserCollection.find().toArray()
//     res.send(users)
// })
// //update
// app.put('/users/:id', async (req, res) => {
//     const userId = req.params.id
//     const result = await UserCollection.updateOne({_id: new ObjectId(userId)}, {
//         $set: req.body
//     })
//     res.send(result)
// })
// //delete
// app.delete('/users/:id', async (req, res) => {
//     const userId = req.params.id
//     const result = await UserCollection.deleteOne({ _id: new ObjectId (userId) })
//     res.send(result)
// })
// app.use(loginRoute)
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})

