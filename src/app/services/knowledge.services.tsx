import { gql } from '@apollo/client';

export interface Knowledge {
  id?: number;
  type: string;
  title: string;
  order: string;
}

const GET_KNOWLEDGE = gql`
  query GetKnowledge($resumeId: Int) {
    knowledge(resumeId: $resumeId) {
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

export { GET_KNOWLEDGE, POST_KNOWLEDGE, DELETE_KNOWLEDGE };
