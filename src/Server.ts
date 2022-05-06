import app from './App';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server run on ${PORT}`))