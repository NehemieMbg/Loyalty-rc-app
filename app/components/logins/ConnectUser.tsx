import Image from 'next/image';
import Link from 'next/link';
import styles from './ConnectUser.module.scss';
import bgImage from '@/public/images/about-bg.jpg';

export default function ConnectUser(props: {
  children: React.ReactNode;
  redirectLink: string;
  redirectMessage: string;
  mode: string;
}) {
  return (
    <div className={styles.register}>
      <Image
        src={bgImage}
        height={2160}
        width={3840}
        alt="Audi R8 seen from behind"
        className={styles['register-bg-image']}
      />
      <div className={styles['register-subcontainer']}>
        <div className={styles['register-container']}>
          <Link href={'/'} className={styles.logo}>
            Loyalty RC
          </Link>

          {props.children}

          <div className={styles['register-footer__container']}>
            <div className={styles['register-link__login']}>
              <Link href={props.redirectLink}>{props.redirectMessage}</Link>
            </div>

            <h2 className={styles['register-inscription__title']}>
              {props.mode}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
