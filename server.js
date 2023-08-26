const path = require('path');
// const Model = require('./model');
const mongoDbConnection = require('./db')
mongoDbConnection()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/get', async (req, res) => {
    const data = await FormModel.find({})
    res.status(200).json(data)
})

const FormSchema = new mongoose.Schema({
    name: String,
    email: String
});

const FormModel = mongoose.model('Form', FormSchema);

app.post('/post', async (req, res) => {
    const { name, email } = req.body;

    const formData = new FormModel({
        name,
        email
    });

    try {
        await formData.save();
        res.status(201).send('Form data saved successfully');
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).send('Internal server error');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})
