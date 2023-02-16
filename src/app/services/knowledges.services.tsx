import { gql } from '@apollo/client';

export interface Knowledges extends Omit<KnowledgesNoId, 'id'> {
  id: number;
}

export interface KnowledgesNoId {
  type: string;
  title: string;
  order: string;
}

const GET_KNOWLEDGES = gql`
  query GetKnowledges($resumeId: Int) {
    knowledges(resumeId: $resumeId) {
      id
      type
      title
      order
    }
  }
`;

const POST_KNOWLEDGE = gql`
  mutation UpdateKnowledge($knowledge: KnowledgeInput, $resumeId: Int) {
    updateKnowledge(knowledge: $knowledge, resumeId: $resumeId) {
      id
      type
      title
      order
    }
  }
`;

const DELETE_KNOWLEDGE = gql`
  mutation deleteKnowledge($id: Int) {
    deleteKnowledge(id: $id)
  }
`;

export { GET_KNOWLEDGES, POST_KNOWLEDGE, DELETE_KNOWLEDGE };
