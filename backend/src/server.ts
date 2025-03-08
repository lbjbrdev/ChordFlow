import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import sequelize from '@infrastructure/database/sequelize';
import { createMusic, getAllMusic, getMusicById } from '@presentation/music/musicController';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.post("/music", createMusic);           
app.get("/music", getAllMusic);            
app.get("/music/:id", getMusicById); 

sequelize.sync({ force: false })
    .then(() => console.log('🚀 Database synced successfully!'))
    .catch(error => console.error('Error syncing database: ', error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});