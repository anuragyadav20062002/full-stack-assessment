"use client"

import { useState, useEffect } from "react"
import "./App.css"
import UserForm from "./components/UserForm"
import UserList from "./components/UserList"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/users`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('Received data:', data) // Debug log
      if (!Array.isArray(data)) {
        console.error('Received non-array data:', data)
        setUsers([])
        return
      }
      setUsers(data)
    } catch (error) {
      console.error("Error fetching users:", error)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleAddUser = async (userData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (response.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Management System</h1>
      </header>
      <main className="app-main">
        <div className="container">
          <div className="form-section">
            <h2>Add New User</h2>
            <UserForm onAddUser={handleAddUser} />
          </div>
          <div className="list-section">
            <h2>User List</h2>
            {loading ? <p>Loading users...</p> : <UserList users={users} />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
