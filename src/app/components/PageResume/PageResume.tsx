import { Users } from '../../services/users.services';
import React, { HTMLAttributes } from 'react';
import './PageResume.scss';
import { Resumes } from '../../services/resumes.services';

interface PageResumeProps extends HTMLAttributes<HTMLDivElement> {
  isFirstPage?: boolean;
  user?: Users;
  resume?: Resumes;
  experiences: JSX.Element | JSX.Element[];
}

const PageResume = ({
  isFirstPage,
  children,
  user,
  resume,
  experiences,
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
                  <div className="first-page__header__left__name">
                    {user?.username}
                  </div>
                  <div className="first-page__header__left__adresse">
                    {user?.adresse}
                  </div>
                  <div className="first-page__header__left__city">
                    {user?.city}
                  </div>
                  <div className="first-page__header__left__email">
                    {user?.email}
                  </div>
                </div>
              </div>
              <div className="first-page__header__right">
                <div className="content__right__container">
                  <div className="first-page__header__right__title">
                    {resume?.title}
                  </div>
                  <div className="first-page__header__right__subtitle">
                    {resume?.subtitle}
                  </div>
                </div>
              </div>
            </div>
            <div className="first-page__subheader">
              <div className="first-page__subheader__left"></div>
              <div className="first-page__subheader__right">
                <div className="content__right__container">
                  <div className="page-resume__title">Projet Professionnel</div>
                  <hr className="first-page__subheader__right__divider"></hr>
                  <div className="first-page__subheader__right__goals">
                    {resume?.goals}
                  </div>
                </div>
              </div>
            </div>
            <div className="first-page__content">
              <div className="page-resume__content__left">
                <div className="content__left__container">
                  <div className="page-resume__title">Formations</div>
                </div>
              </div>
              <div className="page-resume__content__right">
                <div className="content__right__container">
                  <div className="page-resume__title">
                    Expériences professionnelles
                  </div>
                  {experiences}
                </div>
              </div>
            </div>
          </div>
          <div className="page-resume__footer"></div>
        </>
      ) : (
        <>
          <div className="page-resume__header"></div>
          <div className="page-resume__content">
            <div className="page-resume__content__left">
              <div className="content__left__container">
                <div className="page-resume__title">Connaissances</div>
              </div>
            </div>
            <div className="page-resume__content__right">
              <div className="content__right__container">--</div>
            </div>
          </div>
          <div className="page-resume__footer"></div>
        </>
      )}
    </div>
  );
};

export default PageResume;
