import React, { useEffect, useState } from 'react';
import './ResumePreview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageResume from '../../components/PageResume/PageResume';
import { Users } from '../../services/users.services';
import { Resumes } from '../../services/resumes.services';
import {
  GET_EXPERIENCES,
  Experiences,
} from '../../services/experiences.services';
import { useQuery } from '@apollo/client';
import Experience from '../../components/Experience/Experience';
interface ResumePreviewProps {
  user?: Users;
  resume?: Resumes;
}

const ResumePreview = ({ user, resume }: ResumePreviewProps) => {
  const [experiences, setExperiences] = useState<[Experiences]>();
  const { loading, error, data } = useQuery(GET_EXPERIENCES, {
    variables: { resumeId: resume.id },
  });
  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [loading, data]);
  const print = () => {
    const printContent = document.getElementById('content-to-print').innerHTML;
    console.log(printContent);
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  const ExperiencesComponents = experiences ? (
    experiences.map((experience: Experiences) => {
      return <Experience experience={experience}></Experience>;
    })
  ) : (
    <></>
  );

  return (
    <div id="content-to-print">
      <PageResume
        isFirstPage
        user={user}
        resume={resume}
        experiences={ExperiencesComponents}
      >
        <div className="print-logo">
          <FontAwesomeIcon
            icon="print"
            className="button__logo"
            onClick={print}
          />
        </div>
      </PageResume>
      <PageResume experiences={ExperiencesComponents}></PageResume>
    </div>
  );
};

export default ResumePreview;
