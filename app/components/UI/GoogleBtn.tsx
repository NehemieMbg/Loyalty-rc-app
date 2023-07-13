import styles from './GoogleBtn.module.scss';
import GoogleLogo from '@/app/components/icons/googleLogo';

export default function GoogleBtn(props: { signInUser: () => void }) {
  return (
    <div className={styles['google-signin-container']}>
      <button
        onClick={props.signInUser}
        className={styles['google-signin-container__btn']}
      >
        <GoogleLogo className={styles['google-signin-container__logo']} />
        <p>Continuer avec Google</p>
      </button>
    </div>
  );
}
