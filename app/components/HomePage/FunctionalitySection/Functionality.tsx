import React from 'react';
import styles from './Functionality.module.scss';

function Functionality() {
  return (
    <>
      <div className={styles['functionality-section']}>
        <h1 className={styles['heading-title-1']}>Le moteur de notre succès</h1>

        <div className={styles['functionality-container']}>
          <div className={styles['functionality-item']}>
            <h2 className={styles['heading-title-2']}>
              Une réservation sans effort
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              deleniti voluptates veritatis dolores. Sapiente ipsa iure eum sunt
              ipsam aspernatur aliquam minus ullam, illo nisi temporibus eaque
              soluta saepe numquam.
            </p>
          </div>

          <div className={styles['functionality-item']}>
            <h2 className={styles['heading-title-2']}>
              La voiture idéale selon vos attentes
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nostrum beatae, fugit accusantium in magni adipisci sequi eveniet
              facilis nobis saepe quis omnis amet qui hic suscipit asperiores
              aut rem!
            </p>
          </div>

          <div className={styles['functionality-item']}>
            <h2 className={styles['heading-title-2']}>Recevez la voiture</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus placeat recusandae quam labore suscipit impedit
              deserunt eaque repudiandae, quibusdam porro velit magni hic
              laboriosam rem molestiae rerum dicta autem facilis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Functionality;
