const express = require('express');
const app = express();

// client connection
const cors = require('cors')
//! MongoDB and dotenv
require('dotenv').config()

const PORT = process.env.PORT || 8000;


app.use(cors());

app.use(express.json())




//! listen app with port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})