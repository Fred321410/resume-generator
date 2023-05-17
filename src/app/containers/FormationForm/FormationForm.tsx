import Textarea from '../../components/Textarea/Textarea';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './FormationForm.scss';
import { Formations } from '../../services/formations.services';

interface FormationFormProps {
  selected: Formations;
  submit: (a: Formations | null) => unknown;
  remove: (a: Formations) => unknown;
}

const FormationForm = ({ selected, submit, remove }: FormationFormProps) => {
  const [formation, setFormation] = useState(selected);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState({
    title: true,
    from: true,
    to: true,
    description: true,
    order: true,
  });

  useEffect(() => setFormation(selected), [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormation((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const cancel = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    submit(null);
  };

  const handleSubmit = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    submit(formation);
  };

  const deleteData = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    remove(formation);
  };

  useEffect(() => {
    setFormError({
      title: false,
      from: false,
      to: false,
      description: false,
      order: false,
    });
    setIsFormValid(true);
  }, [formation]);

  return (
    <div className="formation-form">
      <form className="formation-form__form">
        <div className="formation-form__form__row">
          <Input
            type={'text'}
            name={'title'}
            label={'Title'}
            value={formation.title}
            onChange={handleChange}
            isValid={!formError.title}
          />
        </div>
        <div className="formation-form__form__row">
          <Input
            type={'text'}
            name={'description'}
            label={'Description'}
            value={formation.description}
            onChange={handleChange}
            isValid={!formError.description}
          />
        </div>
        <div className="formation-form__form__row">
          <Input
            type={'date'}
            name={'from'}
            label={'From'}
            value={formation.from}
            onChange={handleChange}
            isValid={!formError.from}
          />
          <Input
            type={'date'}
            name={'to'}
            label={'To'}
            value={formation.to}
            onChange={handleChange}
            isValid={!formError.to}
          />
        </div>
        <div className="knowledge-form__form__row">
          <Input
            type={'number'}
            name={'order'}
            label={'Order'}
            value={formation.order}
            onChange={handleChange}
            isValid={!formError.order}
          />
        </div>
        <div className="formation-form__form__row">
          <Button
            isDisabled={!isFormValid}
            logo="arrow-left"
            label="Cancel"
            onClick={cancel}
          />
          {selected ? (
            <Button logo={'trash'} label={'Delete'} onClick={deleteData} />
          ) : (
            <></>
          )}
          <Button
            isDisabled={!isFormValid}
            logo="plus"
            label={(selected as Formations).id ? 'Update' : 'Insert'}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default FormationForm;
