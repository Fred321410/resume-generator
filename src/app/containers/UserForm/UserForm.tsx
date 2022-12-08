import React, { useState } from 'react';
import { Users, UsersNoId } from '../../services/users.services';
import './UserForm.scss';

interface UserFormProps {
  selectedUser: Users | UsersNoId,
  submitUser: (a: Users | UsersNoId) => any
}

const UserForm = ({selectedUser, submitUser}: UserFormProps) => {
  const [user, setUser] = useState(selectedUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUser(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitUser(user);
  };

  return (
      <div className='user-form'>
          <div className='user-form__title'>
          {(selectedUser as Users).id ? 'Update' : 'Insert'}
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" name="username" value={user.username} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
  );
}

export default UserForm;