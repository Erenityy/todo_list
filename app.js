const express = require('express')

const mongoose = require('mongoose')

const dotenv = require('dotenv')

const todoRoutes = require('./routes/todos')

dotenv.config()
const app = express()

app.use(express.json())
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/todos', todoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
