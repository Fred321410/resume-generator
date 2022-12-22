import { Users } from '../../services/users.services';
import React, { HTMLAttributes } from 'react';
import './PageResume.scss';
import { Resumes } from '../../services/resumes.services';

interface PageResumeProps extends HTMLAttributes<HTMLDivElement> {
  isFirstPage?: boolean;
  user?: Users;
  resume?: Resumes;
}

const PageResume = ({
  isFirstPage,
  children,
  user,
  resume,
}: PageResumeProps) => {
  return (
    <div className="page-resume">
      {children}
      {isFirstPage ? (
        <>
          <div className="first-page">
            <div className="first-page__header">
              <div className="first-page__header__left">
                <div className="content__left__container">
                  <div>{user?.username}</div>
                  <div>{user?.adresse}</div>
                  <div>{user?.city}</div>
                  <div>{user?.email}</div>
                </div>
              </div>
              <div className="first-page__header__right">
                <div className="content__right__container">{resume?.title}</div>
              </div>
            </div>
            <div className="first-page__subheader">
              <div className="first-page__subheader__left">Left</div>
              <div className="first-page__subheader__right">
                {resume?.goals}
              </div>
            </div>
            <div className="first-page__content">
              <div className="page-resume__content__left">Left</div>
              <div className="page-resume__content__right">Right3</div>
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
