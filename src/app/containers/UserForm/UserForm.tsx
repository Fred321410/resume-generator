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
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    setIsFormValid(
      !!user.username && !!user.telephone && !!user.email && !!user.birthdate
    );
  }, [user]);

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
            required
          />
          <Input
            type={'tel'}
            name={'telephone'}
            label={'Telephone'}
            placeholder={'0123456789'}
            value={user.telephone}
            onChange={handleChange}
            pattern="[0-9]{10}"
          />
        </div>
        <div className="user-form__form__row">
          <Input
            type={'email'}
            name={'email'}
            label={'Email'}
            value={user.email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
        <div className="user-form__form__row">
          <Input
            type={'date'}
            name={'birthdate'}
            label={'Birthdate'}
            value={user.birthdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-form__form__row">
          <Button
            isDisabled={!isFormValid}
            logo="plus"
            label="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
