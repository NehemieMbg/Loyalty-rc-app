import TermsNavigation from './Components/TermsNavigation/ArticlesNavigation';

import styles from './Articles.module.scss';

export default async function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <div className={styles.articles}>
        <div className={styles['articles-container']}>
          <TermsNavigation className={styles.navigation} />
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </>
  );
}
