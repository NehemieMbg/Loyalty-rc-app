import styles from './Footer.module.scss';

import LinkedIn from '../UI/SocialMedia/LinkedIn';
import Instagram from '../UI/SocialMedia/Instagram';
import Snapchat from '../UI/SocialMedia/Snapchat';
import Twitter from '../UI/SocialMedia/Twitter';
import Youtube from '../UI/SocialMedia/Youtube';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className={styles['footer']}>
        <div className={styles['footer-container']}>
          <ul className={styles['footer-list']}>
            <li className={styles['footer-list__link footer-link__item-1']}>
              Contact Us
            </li>
            <li className={styles['footer-list__link footer-link__item-2']}>
              Terms & Conditions
            </li>
            <li className={styles['footer-list__link footer-link__item-3']}>
              Privacy Policy
            </li>
          </ul>

          <div className={styles['footer-hl']}></div>

          <div className={styles['footer-container-2']}>
            <div className={styles['footer-copyright']}>
              Copyright &copy; {year} Loyalty-rc
            </div>

            <div className={styles['footer-socials__icon']}>
              <Instagram className={styles['footer-socials__icon-link']} />
              <Youtube className={styles['footer-socials__icon-link']} />
              <Twitter className={styles['footer-socials__icon-link']} />
              <Snapchat className={styles['footer-socials__icon-link']} />
              <LinkedIn className={styles['footer-socials__icon-link']} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
