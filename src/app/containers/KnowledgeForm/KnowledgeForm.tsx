import Textarea from '../../components/Textarea/Textarea';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './KnowledgeForm.scss';
import { Knowledge } from '../../services/knowledge.services';

interface KnowledgeFormProps {
  selected: Knowledge;
  submit: (a: Knowledge | null) => unknown;
  remove: (a: Knowledge) => unknown;
}

const KnowledgeForm = ({ selected, submit, remove }: KnowledgeFormProps) => {
  const [knowledge, setKnowledge] = useState(selected);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState({
    title: true,
    type: true,
    order: true,
  });

  useEffect(() => setKnowledge(selected), [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setKnowledge((prevFormData) => {
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
    submit(knowledge);
  };

  const deleteData = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    remove(knowledge);
  };

  useEffect(() => {
    setFormError({
      title: false,
      type: false,
      order: false,
    });
    setIsFormValid(true);
  }, [knowledge]);

  return (
    <div className="knowledge-form">
      <form className="knowledge-form__form">
        <div className="knowledge-form__form__row">
          <Input
            type={'text'}
            name={'title'}
            label={'Title'}
            value={knowledge.title}
            onChange={handleChange}
            isValid={!formError.title}
          />
        </div>
        <div className="knowledge-form__form__row">
          <Input
            type={'text'}
            name={'type'}
            label={'Type'}
            value={knowledge.type}
            onChange={handleChange}
            isValid={!formError.type}
          />
          <Input
            type={'number'}
            name={'order'}
            label={'Order'}
            value={knowledge.order}
            onChange={handleChange}
            isValid={!formError.order}
          />
        </div>
        <div className="knowledge-form__form__row">
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
            label={(selected as Knowledge).id ? 'Update' : 'Insert'}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default KnowledgeForm;
