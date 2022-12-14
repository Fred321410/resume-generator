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
  const [formError, setFormError] = useState({
    username: true,
    telephone: true,
    email: true,
    birthdate: true,
  });

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

  const isUsernameInvalid = (username: string) => {
    return !username || !username.length;
  };

  const isEmailInvalid = (email: string) => {
    return (
      !email ||
      !email.length ||
      !email.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    );
  };

  const isTelephoneInvalid = (telephone: string) => {
    return !telephone || !telephone.length || !telephone.match('^[0-9]{10}$');
  };

  const isBirthdateInvalid = (birthdate: string) => {
    return !birthdate;
  };

  const handleSubmit = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    submitUser(user);
  };

  useEffect(() => {
    setFormError({
      username: isUsernameInvalid(user.username),
      email: isEmailInvalid(user.email),
      telephone: isTelephoneInvalid(user.telephone),
      birthdate: isBirthdateInvalid(user.birthdate),
    });
    setIsFormValid(
      !formError.username &&
        !formError.birthdate &&
        !formError.telephone &&
        !formError.email
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
            isValid={!formError.username}
          />
          <Input
            type={'tel'}
            name={'telephone'}
            label={'Telephone'}
            placeholder={'0123456789'}
            value={user.telephone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            isValid={!formError.telephone}
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
            isValid={!formError.email}
          />
        </div>
        <div className="user-form__form__row">
          <Input
            type={'date'}
            name={'birthdate'}
            label={'Birthdate'}
            value={user.birthdate}
            onChange={handleChange}
            isValid={!formError.birthdate}
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
