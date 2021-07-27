const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//routes
const books = require('./routes/api/books')
const klothed = require('./routes/api/klothed')

const app = express();


app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));

//app.get('/', (req, res) => res.send('Hello World!'));
//app.use('/api/books', books);
app.use('/', klothed);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));