import express from 'express';
import router from './routes/api.js';
import Connection  from './database/db.js';
import cors from 'cors';
import path from 'path';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());

app.use('/',router);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,'/frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}  );

Connection(); // Call the connection function to connect to MongoDB