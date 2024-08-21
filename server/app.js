import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './config/dbConfig.js'

import userRoute from './routes/userRoute.js'

dotenv.config();
connection()

const app = express();

app.use(express.json());

app.use(cors());
app.use('/', userRoute)

const port = process.env.PORT

app.listen(port, () => console.log(`Server Started At Port ${port}`));
