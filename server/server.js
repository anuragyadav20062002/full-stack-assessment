const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

const userRoutes = require("./routes/users")
app.use("/api/users", userRoutes)

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../dist")))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
