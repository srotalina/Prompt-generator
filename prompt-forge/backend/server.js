const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./db')
const generateRoutes = require('./routes/generate')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Initialize database
db.initialize()

// Routes
app.use('/api', generateRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
