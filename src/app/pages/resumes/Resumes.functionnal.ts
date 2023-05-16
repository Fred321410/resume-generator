import { DELETE_EXPERIENCE, GET_EXPERIENCES, POST_EXPERIENCE } from "../../services/experiences.services";
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