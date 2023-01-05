import Textarea from '../../components/Textarea/Textarea';
import {
  Experiences,
  ExperiencesNoId,
} from 'app/services/experiences.services';
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './ExperienceForm.scss';

interface ExperienceFormProps {
  selectedExperience: Experiences | ExperiencesNoId;
  submitExperience: (a: Experiences | ExperiencesNoId | null) => unknown;
}

const ExperienceForm = ({
  selectedExperience,
  submitExperience,
}: ExperienceFormProps) => {
  const [experience, setExperience] = useState(selectedExperience);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState({
    poste: true,
    esn: true,
    enterprise: true,
    from: true,
    to: true,
    city: true,
    country: true,
    description: true,
    stillInPoste: true,
    logo: true,
  });

  useEffect(() => setExperience(selectedExperience), [selectedExperience]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExperience((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const cancel = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    submitExperience(null);
  };

  const handleSubmit = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    submitExperience(experience);
  };

  useEffect(() => {
    setFormError({
      poste: false,
      enterprise: false,
      esn: false,
      from: false,
      to: false,
      city: false,
      country: false,
      description: false,
      stillInPoste: false,
      logo: false,
    });
    setIsFormValid(true);
  }, [experience]);

  return (
    <div className="experience-form">
      <form className="experience-form__form">
        <div className="experience-form__form__row">
          <Input
            type={'text'}
            name={'poste'}
            label={'Poste'}
            value={experience.poste}
            onChange={handleChange}
            isValid={!formError.poste}
          />
        </div>
        <div className="experience-form__form__row">
          <Input
            type={'text'}
            name={'enterprise'}
            label={'Enterprise'}
            value={experience.enterprise}
            onChange={handleChange}
            isValid={!formError.enterprise}
          />
          <Input
            type={'text'}
            name={'esn'}
            label={'ESN'}
            value={experience.esn}
            onChange={handleChange}
            isValid={!formError.esn}
          />
        </div>
        <div className="experience-form__form__row">
          <Input
            type={'date'}
            name={'from'}
            label={'From'}
            value={experience.from}
            onChange={handleChange}
            isValid={!formError.from}
          />
          <Input
            type={'date'}
            name={'to'}
            label={'To'}
            value={experience.to}
            onChange={handleChange}
            isValid={!formError.to}
          />
        </div>
        <div className="experience-form__form__row">
          <Input
            type={'text'}
            name={'city'}
            label={'City'}
            value={experience.city}
            onChange={handleChange}
            isValid={!formError.city}
          />
          <Input
            type={'text'}
            name={'country'}
            label={'Country'}
            value={experience.country}
            onChange={handleChange}
            isValid={!formError.country}
          />
        </div>
        <div className="experience-form__form__row">
          <Textarea
            name={'description'}
            label={'Description'}
            value={experience.description}
            onChange={handleChange}
          />
        </div>
        <div className="experience-form__form__row">
          <Button
            isDisabled={!isFormValid}
            logo="arrow-left"
            label="Cancel"
            onClick={cancel}
          />
          <Button
            isDisabled={!isFormValid}
            logo="plus"
            label={(selectedExperience as Experiences).id ? 'Update' : 'Insert'}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
