const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express.js Backend!');
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));