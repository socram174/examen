import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js';
import userRoutes from './routes/user.js';
import reservaRoutes from './routes/reserva.js';


const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/reservas', reservaRoutes);

app.get('/', (req, res) => {
    
    const newUser = new User({name:"John", email:"Jhon@hotmail.com"});
    newUser.save();
    
    res.send('Hello to Memories API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/examen", {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
