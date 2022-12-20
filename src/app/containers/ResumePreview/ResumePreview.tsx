import React from 'react';
import './ResumePreview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumePreview = () => {
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
      <div className="resume-preview">
        <div className="print-logo">
          <FontAwesomeIcon
            icon="print"
            className="button__logo"
            onClick={print}
          />
        </div>
        <div className="resume-preview__header"></div>
        <div className="resume-preview__content">
          <div className="resume-preview__content__left">Left</div>
          <div className="resume-preview__content__right">Right</div>
        </div>
        <div className="resume-preview__footer"></div>
      </div>
    </div>
  );
};

export default ResumePreview;
