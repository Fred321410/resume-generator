import { gql } from '@apollo/client';

export interface Formations extends Omit<FormationsNoId, 'id'> {
  id: number;
}

export interface FormationsNoId {
  title: string;
  from: string;
  to: string;
  description: string;
  order: string;
}

const GET_FORMATIONS = gql`
  query GetFormations($resumeId: Int) {
    formations(resumeId: $resumeId) {
      id
      title
      from
      to
      description
      order
    }
  }
`;

const POST_FORMATION = gql`
  mutation UpdateFormation($formation: FormationInput, $resumeId: Int) {
    updateFormation(formation: $formation, resumeId: $resumeId) {
      id
      title
      from
      to
      description
      order
    }
  }
`;

const DELETE_FORMATION = gql`
  mutation deleteFormation($id: Int) {
    deleteFormation(id: $id)
  }
`;

export { GET_FORMATIONS, POST_FORMATION, DELETE_FORMATION };
