import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Users, UsersNoId } from '../../services/users.services';
import './UserForm.scss';

interface UserFormProps {
  selectedUser: Users | UsersNoId;
  submitUser: (a: Users | UsersNoId) => unknown;
}

const UserForm = ({ selectedUser, submitUser }: UserFormProps) => {
  const [user, setUser] = useState(selectedUser);

  useEffect(() => setUser(selectedUser), [selectedUser]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    submitUser(user);
  };

  return (
    <div className="user-form">
      <div className="user-form__title">
        {(selectedUser as Users).id ? 'Update' : 'Insert'}
      </div>
      <form className="user-form__form">
        <div className="user-form__form__row">
          <Input
            type={'text'}
            name={'username'}
            label={'Username'}
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="user-form__form__row">
          <Button logo="plus" label="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
