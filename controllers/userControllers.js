import { ObjectId } from 'mongodb'
import {connectDB,UserCollection} from '../db/db.js'
export async function addUser(req,res){
   const result= await UserCollection.insertOne(req.body)
   res.send(result)
}
export async function getusers(req,res){
    const result=await UserCollection.find().toArray()
    res.send(result)
}
export async function UpdateUser(req,res) {
    const userId= req.params.id;
    const result= await UserCollection.updateOne({_id:new ObjectId(userId)},{$set:req.body})
    res.send(result)
}
export async function DeleteUser(req,res){
    const userId=req.params.id;
    const result= await UserCollection.deleteOne({_id: new ObjectId(userId)})
    res.send(result)
}
