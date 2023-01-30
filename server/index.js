import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import artefyRoutes from './routes/artefyRoutes.js';

dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello from artefy!');
});

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/artefy', artefyRoutes);

app.listen(8080, () => {
    console.log(`Server started on port http://localhost:8080`);
});