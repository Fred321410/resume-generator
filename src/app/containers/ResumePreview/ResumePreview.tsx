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
import { Formations, GET_FORMATIONS } from '../../services/formations.services';
import Formation from '../../components/Formation/Formation';
import {
  GET_KNOWLEDGE,
  Knowledge,
  KnowledgeGroup,
} from '../../services/knowledge.services';
import KnowledgeComponent from '../../components/KnowledgeComponent/KnowledgeComponent';
interface ResumePreviewProps {
  user?: Users;
  resume?: Resumes;
}

const ResumePreview = ({ user, resume }: ResumePreviewProps) => {
  const [experiences, setExperiences] = useState<Experiences[]>();
  const [formations, setFormations] = useState<Formations[]>();
  const [knowledge, setKnowledge] = useState<Knowledge[]>();
  const { loading, error, data } = useQuery(GET_EXPERIENCES, {
    variables: { resumeId: resume.id },
  });
  const {
    loading: loadingFormation,
    error: errorFormation,
    data: dataFormation,
  } = useQuery(GET_FORMATIONS, {
    variables: { resumeId: resume.id },
  });
  const {
    loading: loadingKnowledge,
    error: errorKnowledge,
    data: dataKnowledge,
  } = useQuery(GET_KNOWLEDGE, {
    variables: { resumeId: resume.id },
  });
  useEffect(() => {
    if (data) {
      setExperiences(data.experiences);
    }
  }, [loading, data]);
  useEffect(() => {
    if (dataFormation) {
      setFormations(dataFormation.formations);
    }
  }, [loadingFormation, dataFormation]);
  useEffect(() => {
    if (dataKnowledge) {
      setKnowledge(dataKnowledge.knowledge);
    }
  }, [loadingKnowledge, dataKnowledge]);
  const print = () => {
    const printContent = document.getElementById('content-to-print').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  function getExperiencesComponents(
    nbPage: number,
    experiences: Experiences[] | undefined
  ): JSX.Element | JSX.Element[] {
    return experiences ? (
      experiences
        .filter(
          (experience: Experiences) => experience.page === nbPage.toString()
        )
        .map((experience: Experiences) => {
          return <Experience key={experience.id} experience={experience} />;
        })
    ) : (
      <></>
    );
  }

  function getFormationsComponents(
    formations: Formations[] | undefined
  ): JSX.Element | JSX.Element[] {
    return formations ? (
      formations.map((formation: Formations) => {
        return <Formation key={formation.id} formation={formation} />;
      })
    ) : (
      <></>
    );
  }

  function getKnowledgeComponents(
    knowledge: Knowledge[] | undefined
  ): JSX.Element | JSX.Element[] {
    const knowledgeGroup = knowledge
      ? knowledge.reduce((groups: KnowledgeGroup, kl: Knowledge) => {
          const groupKey = kl.type;
          const extendedgroups = Object.assign({}, groups);

          if (!extendedgroups[groupKey]) {
            extendedgroups[groupKey] = [];
          }

          extendedgroups[groupKey].push(kl);
          return extendedgroups;
        }, {} as KnowledgeGroup)
      : [];
    const knowledgeGroupArray = Object.entries(knowledgeGroup);
    knowledgeGroupArray.sort((a, b) => {
      const minA = a[1].reduce(
        (min, current) => (current.order - min < 0 ? current.order : min),
        a[1][0].order
      );
      const minB = b[1].reduce(
        (min, current) => (current.order - min < 0 ? current.order : min),
        b[1][0].order
      );
      return minA - minB;
    });
    return knowledgeGroupArray.map(([groupKey, group]) => {
      return (
        <KnowledgeComponent key={groupKey} type={groupKey} knowledge={group} />
      );
    });
  }

  return (
    <div id="content-to-print">
      <PageResume
        isFirstPage
        user={user}
        resume={resume}
        experiences={getExperiencesComponents(1, experiences)}
        knowledge={getKnowledgeComponents(knowledge)}
      >
        <div className="print-logo">
          <FontAwesomeIcon
            icon="print"
            className="button__logo"
            onClick={print}
          />
        </div>
      </PageResume>
      <PageResume
        experiences={getExperiencesComponents(2, experiences)}
        formations={getFormationsComponents(formations)}
      ></PageResume>
    </div>
  );
};

export default ResumePreview;
