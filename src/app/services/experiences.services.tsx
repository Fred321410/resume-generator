import { gql } from '@apollo/client';

export interface Experiences extends Omit<ExperiencesNoId, 'id'> {
  id: number;
}

export interface ExperiencesNoId {
  poste: string;
  esn: string;
  enterprise: string;
  from: string;
  to: string;
  stillInPost?: boolean;
  logo: string;
  city: string;
  country: string;
  description: string;
}

const GET_EXPERIENCES = gql`
  query GetExperiences($resumeId: Int) {
    experiences(resumeId: $resumeId) {
      id
      poste
      esn
      enterprise
      from
      to
      stillInPost
      logo
      city
      country
      description
    }
  }
`;

const POST_EXPERIENCE = gql`
  mutation UpdateExperience($experience: ExperienceInput, $resumeId: Int) {
    updateExperience(experience: $experience, resumeId: $resumeId) {
      id
      poste
      esn
      enterprise
      from
      to
      stillInPost
      logo
      city
      country
      description
    }
  }
`;

const DELETE_EXPERIENCE = gql`
  mutation deleteExperience($id: Int) {
    deleteExperience(id: $id)
  }
`;

export { GET_EXPERIENCES, POST_EXPERIENCE, DELETE_EXPERIENCE };
