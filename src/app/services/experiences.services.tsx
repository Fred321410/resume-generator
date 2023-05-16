import { gql } from '@apollo/client';

/*export interface Experiences extends ExperiencesNoId {
  id: number;
}*/

export interface Experiences {
  id?: number;
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
  tools: string;
  order: string;
  page: string;
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
      tools
      order
      page
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
      order
      tools
      page
    }
  }
`;

const DELETE_EXPERIENCE = gql`
  mutation deleteExperience($id: Int) {
    deleteExperience(id: $id)
  }
`;

export { GET_EXPERIENCES, POST_EXPERIENCE, DELETE_EXPERIENCE };
