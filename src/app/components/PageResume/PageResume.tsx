import React, { HTMLAttributes } from 'react';
import './PageResume.scss';

interface PageResumeProps extends HTMLAttributes<HTMLDivElement> {
  isFirstPage?: boolean;
}

const PageResume = ({ isFirstPage, children }: PageResumeProps) => {
  return (
    <div className="page-resume">
      {children}
      {isFirstPage ? (
        <>
          <div className="first-page">
            <div className="first-page__header">
              <div className="first-page__header__left">Left</div>
              <div className="first-page__header__right">Right</div>
            </div>
            <div className="first-page__subheader">
              <div className="first-page__subheader__left">Left</div>
              <div className="first-page__subheader__right">Right</div>
            </div>
            <div className="first-page__content">
              <div className="page-resume__content__left">Left</div>
              <div className="page-resume__content__right">Right</div>
            </div>
          </div>
          <div className="page-resume__footer"></div>
        </>
      ) : (
        <>
          <div className="page-resume__header"></div>
          <div className="page-resume__content">
            <div className="page-resume__content__left">Left</div>
            <div className="page-resume__content__right">Right</div>
          </div>
          <div className="page-resume__footer"></div>
        </>
      )}
    </div>
  );
};

export default PageResume;
