import React from 'react';
import './ResumePreview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageResume from '../../components/PageResume/PageResume';
import { Users } from '../../services/users.services';
import { Resumes } from '../../services/resumes.services';

interface ResumePreviewProps {
  user?: Users;
  resume?: Resumes;
}

const ResumePreview = ({ user, resume }: ResumePreviewProps) => {
  const print = () => {
    const printContent = document.getElementById('content-to-print').innerHTML;
    console.log(printContent);
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  return (
    <div id="content-to-print">
      <PageResume isFirstPage user={user} resume={resume}>
        <div className="print-logo">
          <FontAwesomeIcon
            icon="print"
            className="button__logo"
            onClick={print}
          />
        </div>
      </PageResume>
      <PageResume></PageResume>
    </div>
  );
};

export default ResumePreview;
