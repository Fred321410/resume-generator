import { gql } from '@apollo/client';

export interface Resumes {
  id: number;
  title: string;
  subtitle: string;
  goals: string;
}

const GET_RESUMES = gql`
  query GetResumes($userId: Int) {
    resumes(userId: $userId) {
      id
      title
      subtitle
      goals
    }
  }
`;

export { GET_RESUMES };
