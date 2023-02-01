import './config/config.js'
import express from 'express'
import multer from 'multer'
import morgan from 'morgan'
import cors from 'cors'
import { getFurniture, createFurniture } from './controller/furnitureController.js'

const PORT = process.env.PORT

const app = express()
const formToBody = multer({ dest: './public' })
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/public', express.static('./public'))


//! ---------------------------------- Routes --------------------------------------

app.get('/api/furniture', getFurniture)
app.post('/api/furniture', formToBody.single('image'), createFurniture)


app.listen(PORT, () => console.log("The server is running on port:", PORT))