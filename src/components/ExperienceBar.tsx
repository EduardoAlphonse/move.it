import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceTonextLevel } = useContext(ChallengesContext);

  const percentToNexLevel = Math.round((100 * currentExperience) / experienceTonextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNexLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNexLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceTonextLevel} xp</span>
    </header>
  );
}