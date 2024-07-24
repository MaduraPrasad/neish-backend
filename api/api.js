const axios = require('axios');

// API URL and Bearer Token from environment variables
const API_URL = process.env.API_URL;
const BEARER_TOKEN = process.env.BEARER_TOKEN;

// Function to get jobs
const getJobs = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching jobs');
    }
};

module.exports = {
    getJobs
};
