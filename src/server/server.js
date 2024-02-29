// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/appChat', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    phoneNumber: String,
    password: String,
});

const UserModel = mongoose.model('User', userSchema);

app.post('/api/login', async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        const user = await UserModel.findOne({ phoneNumber, password });
        if (user) {
            res.status(200).json({ message: 'Login success', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
