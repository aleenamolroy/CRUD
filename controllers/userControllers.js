import { ObjectId } from 'mongodb'
import { connectDB, UserCollection } from '../db/db.js'
export async function addUser(req, res) {
    try {
        const result = await UserCollection.insertOne(req.body)
        res.send(result)
    }
    catch {
        res.sendStatus(500)
    }
}
export async function getusers(req, res) {
    try {
        const result = await UserCollection.find().toArray()
        res.send(result)
    }
    catch {
        res.sendStatus(500)

    }
}
export async function UpdateUser(req, res) {
    try {
        const userId = req.params.id;
        const result = await UserCollection.deleteOne({ _id: new ObjectId(userId) })
        res.send(result)
    }
    catch {
        res.sendStatus(500)

    }
    const userId = req.params.id;
    const result = await UserCollection.updateOne({ _id: new ObjectId(userId) }, { $set: req.body })
    res.send(result)
}
export async function DeleteUser(req, res) {
    try {
        const userId = req.params.id;
        const result = await UserCollection.deleteOne({ _id: new ObjectId(userId) })
        res.send(result)
    }
    catch {
        res.sendStatus(500)

    }

}
