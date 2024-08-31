import React, { useState } from 'react';

import './ManageUser.css'; // Ensure this CSS file has the necessary styles

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');


  const handleAddUser = () => {
    if (newUser.trim()) {
      setUsers([...users, { name: newUser }]);
      setNewUser('');
    }
  };

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setEditValue(users[index].name);
  };

  const handleSaveEdit = (index) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { name: editValue } : user
    );
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditValue('');
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="manage-user-container">
      <h2>Manage Users</h2>
      <div className="user-form">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Add new user"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </div>
            ) : (
              <span>{user.name}</span>
            )}
            <button onClick={() => handleEditUser(index)}>Edit</button>
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUser;
