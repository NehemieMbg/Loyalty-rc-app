import Link from 'next/link';
import styles from './Newsletter.module.scss';

// Regler les titre sur le home page (mode telephone)
// connecter la forme avec la database
// Et couleur des links du newsletter

function Newsletter() {
  return (
    <>
      <div className={styles['newsletter']}>
        <div className={styles['newsletter-hl']}></div>
        <div className={styles['newsletter-container']}>
          <div className={styles['newsletter-text__container']}>
            <h1 className={styles['heading-title-1']}>Newsletter</h1>
            <p className={styles['newsletter-text']}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              dolores facere voluptatem pariatur, repellat dolorum explicabo
              suscipit. Eligendi totam impedit vitae nemo debitis cupiditate
              repellat reiciendis possimus, consequuntur ullam nostrum?
            </p>
          </div>

          <form action="/" className={styles['newsletter-form']}>
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email"
              className={styles['newsletter-form__input']}
            />
            <button className={styles['btn-primary']}>Subscribe</button>
            <p className={styles['form-text']}>
              By sharing your email. You agree to our{' '}
              <Link href={'terms'} className={styles['text-highlight']}>
                terms of use
              </Link>{' '}
              and{' '}
              <Link href={'privacy'} className={styles['text-highlight']}>
                privacy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
