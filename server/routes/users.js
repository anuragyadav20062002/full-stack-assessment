const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 })
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, address } = req.body

    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const newUser = new User({
      name,
      email,
      phone,
      address,
    })

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router
