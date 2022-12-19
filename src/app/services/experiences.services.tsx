import { gql } from '@apollo/client';

export interface Experiences extends Omit<ExperiencesNoId, 'id'> {
  id: number;
}

export interface ExperiencesNoId {
  enterprise: string;
}

const GET_EXPERIENCES = gql`
  query GetExperiences {
    experiences {
      id
      username
      birthdate
      telephone
      email
    }
  }
`;

export { GET_EXPERIENCES };
