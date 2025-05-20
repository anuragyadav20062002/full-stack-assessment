import "./UserList.css"

function UserList({ users }) {
  if (users.length === 0) {
    return <p className="no-users">No users found. Add a new user to get started.</p>
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user._id} className="user-card">
          <h3>{user.name}</h3>
          <div className="user-details">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList
