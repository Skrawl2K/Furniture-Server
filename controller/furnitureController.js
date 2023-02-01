import { findAllFurniture, insertFurniture } from '../models/furnitureDao.js'

//! GET

export const getFurniture = (_, res) => {
    findAllFurniture()
        .then((furniture) => res.json(furniture))
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error while fetching data!");
        })
}

//! POST
export const createFurniture = (req, res) => {
    const newFurniture = {
        title: req.body.title,
        size: req.body.size,
        room: req.body.room,
        image: req.file.path,
        text: req.body.text
    }
    insertFurniture(newFurniture)
        .then((id) => {
            console.log("Entry succeeded");
            res.json({ id });
        }).catch((err) => {
            console.error(err);
            // 500 - Internal Server Error
            res.status(500).send("Error while creating entry");
        })
}
