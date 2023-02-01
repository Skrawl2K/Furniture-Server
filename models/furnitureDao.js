import { getDb } from "../util/db.js";
import mongodb from "mongodb";


export const insertFurniture = (furniture) => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection('furniture').insertOne(furniture))
            .then((result) => {
                console.log("furnitureDao - insertFurniture result")
                resolve(result.insertedId)
            })
            .catch((err) => reject(err))
    })
}

export const findAllFurniture = () => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection('furniture').find())
            .then((furniture) => furniture.toArray())
            .then((furnitureArray) => resolve(furnitureArray))
            .catch((err) => reject(err))
    });
}