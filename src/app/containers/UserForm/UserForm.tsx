import React, { useState } from 'react';
import Button from '../../components/Button/Button';
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
          <form onSubmit={handleSubmit} className='user-form__form'>
            <div className='user-form__form__row'>
              <label>
                Username:
                <input type="text" name="username" value={user.username} onChange={handleChange}/>
              </label>
            </div>
            <div className='user-form__form__row'>
              <Button
                logo='plus'
                label='Submit'
                callback={handleSubmit}/>
            </div>
          </form>
      </div>
  );
}

export default UserForm;