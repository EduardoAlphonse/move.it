import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/EduardoAlphonse.png" alt="Eduardo Alphonse" />
      <div>
        <strong>Eduardo Oliveira</strong>
        <p>
          <img src="/icons/level.svg" alt="level" />
          Nível: {level}
        </p>
      </div>
    </div>
  );
}