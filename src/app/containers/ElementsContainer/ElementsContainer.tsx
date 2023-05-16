import React, { useEffect, useState, ComponentType } from 'react';
import './ElementsContainer.scss';
import { Resumes } from '../../services/resumes.services';
import Elements from '../Elements/Elements';

interface WrapperProps<T> {
  selected: T;
  submit(element: T | null): void;
  remove(element: T): void;
}

interface ElementsContainerProps<T> {
  resume: Resumes;
  getDefaultFormValues: () => T;
  elementKey: string;
  elementsKey: string;
  labelKey: keyof T;
  Wrapper: ComponentType<WrapperProps<T>>;
  useBack: {
    add: any;
    deleteData: any;
    loading: any;
    data: any;
    error: any;
  };
  title: string;
}

interface ElementWithId {
  id?: number;
}

function ElementsContainer<T extends ElementWithId>({
  resume,
  getDefaultFormValues,
  labelKey,
  elementKey,
  elementsKey,
  Wrapper,
  useBack,
  title,
}: ElementsContainerProps<T>) {
  const [elements, setElements] = useState<T[]>();
  const [selectedElement, setSelectedElement] = useState<T | null>(null);
  const { loading, error, data, add, deleteData } = useBack;

  useEffect(() => {
    if (data) {
      setElements(data[elementsKey]);
    }
  }, [loading, data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const insertOrUpdate = (element: T | null) => {
    if (element) {
      const variables = { resumeId: resume.id } as {
        resumeId: number;
        [key: string]: unknown;
      };
      variables[elementKey] = element;
      add({ variables: variables });
    }
    setSelectedElement(null);
  };

  const remove = () => {
    if (selectedElement && selectedElement.id) {
      deleteData({ variables: { id: selectedElement.id } });
    }
    setSelectedElement(null);
  };

  const setSelectedElementeMapper = (elementId: number | null) => {
    if (elementId && elements) {
      const element = elements.find((el) => el.id === elementId);
      if (element) setSelectedElement(element);
    } else {
      setSelectedElement(getDefaultFormValues());
    }
  };

  return (
    <Elements
      title={title}
      elements={elements?.map((el) => {
        return { id: el.id ?? -1, label: (el[labelKey] as object).toString() };
      })}
      displayForm={!!selectedElement}
      setSelectedElement={setSelectedElementeMapper}
    >
      <Wrapper
        selected={selectedElement!}
        submit={insertOrUpdate}
        remove={remove}
      />
    </Elements>
  );
}

export default ElementsContainer;
