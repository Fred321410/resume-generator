import { DELETE_EXPERIENCE, GET_EXPERIENCES, POST_EXPERIENCE } from "../../services/experiences.services";
import { DELETE_KNOWLEDGE, GET_KNOWLEDGE, POST_KNOWLEDGE } from "../../services/knowledge.services";
import { DELETE_FORMATION, GET_FORMATIONS, POST_FORMATION } from "../../services/formations.services";
import { useMutation, useQuery } from '@apollo/client';

export const useExperiencesBack = (resumeId: number) =>  {

  const { loading, error, data } = useQuery(GET_EXPERIENCES, {
    variables: { resumeId: resumeId },
  });
  const [addExperience] = useMutation(POST_EXPERIENCE, {
    refetchQueries: [
      { query: GET_EXPERIENCES, variables: { resumeId: resumeId } },
    ],
  });
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE, {
    refetchQueries: [
      { query: GET_EXPERIENCES, variables: { resumeId: resumeId } },
    ],
  });
	  return  {
    add: addExperience,
    deleteData: deleteExperience,
		  loading,
		  error,
		  data
	  }
}

export const useKnowledgeBack = (resumeId: number) =>  {

  const { loading, error, data } = useQuery(GET_KNOWLEDGE, {
    variables: { resumeId: resumeId },
  });
  const [addKnowledge] = useMutation(POST_KNOWLEDGE, {
    refetchQueries: [
      { query: GET_KNOWLEDGE, variables: { resumeId: resumeId } },
    ],
  });
  const [deleteKnowledge] = useMutation(DELETE_KNOWLEDGE, {
    refetchQueries: [
      { query: GET_KNOWLEDGE, variables: { resumeId: resumeId } },
    ],
  });
	  return  {
    add: addKnowledge,
    deleteData: deleteKnowledge,
		  loading,
		  error,
		  data
	  }
}

export const useFormationsBack = (resumeId: number) =>  {

  const { loading, error, data } = useQuery(GET_FORMATIONS, {
    variables: { resumeId: resumeId },
  });
  const [addFormation] = useMutation(POST_FORMATION, {
    refetchQueries: [
      { query: GET_FORMATIONS, variables: { resumeId: resumeId } },
    ],
  });
  const [deleteFormation] = useMutation(DELETE_FORMATION, {
    refetchQueries: [
      { query: GET_FORMATIONS, variables: { resumeId: resumeId } },
    ],
  });
	  return  {
    add: addFormation,
    deleteData: deleteFormation,
		  loading,
		  error,
		  data
	  }
}