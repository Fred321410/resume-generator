import React from 'react';
import './ResumePreview.scss';

const ResumePreview = () => {
  return (
    <div className="resume-preview">
      <div className="resume-preview__header"></div>
      <div className="resume-preview__content">
        <div className="resume-preview__content__left"></div>
        <div className="resume-preview__content__right"></div>
      </div>
      <div className="resume-preview__footer"></div>
    </div>
  );
};

export default ResumePreview;
