require('dotenv').config();
const express = require('express');
const { getJobs } = require('./api/api');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/jobs', async (req, res) => {
    try {
        const jobs = await getJobs();
        res.json(jobs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
