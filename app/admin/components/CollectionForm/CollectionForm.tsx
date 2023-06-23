'use client';

import styles from './CollectionForm.module.scss';

function CollectionForm() {
  function addCar(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles['form-container']}>
      <form action="" onSubmit={addCar} className={styles.form}>
        <div className={styles['form-group-container']}>
          <h1>Véhicule</h1>
          <div className={styles['form-group']}>
            <label htmlFor="make" className={styles['form-group__label']}>
              Marque
            </label>
            <input
              type="text"
              name="make"
              id="make"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="model" className={styles['form-group__label']}>
              Model
            </label>
            <input
              type="text"
              name="model"
              id="model"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="year" className={styles['form-group__label']}>
              Année
            </label>
            <input
              type="number"
              name="year"
              id="year"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="engine" className={styles['form-group__label']}>
              Moteur
            </label>
            <input
              type="text"
              name="engine"
              id="engine"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="max-power" className={styles['form-group__label']}>
              Puissance
            </label>
            <input
              type="number"
              name="max-power"
              id="max-power"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="top-speed" className={styles['form-group__label']}>
              Vitesse de pointe
            </label>
            <input
              type="number"
              name="top-speed"
              id="top-speed"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label
              htmlFor="acceleration"
              className={styles['form-group__label']}
            >
              0 à 100
            </label>
            <input
              type="number"
              name="acceleration"
              id="acceleration"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label
              htmlFor="transmission"
              className={styles['form-group__label']}
            >
              Transmission
            </label>
            <select
              name="transmission"
              id="transmission"
              className={styles['form-group__input']}
            >
              <option value="automatique">Automatique</option>
              <option value="manuelle">Manuelle</option>
            </select>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="images" className={styles['form-group__label']}>
              Images
            </label>
            <input
              type="file"
              name="images"
              id="images"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="about" className={styles['form-group__label']}>
              A Propos
            </label>
            <textarea
              name="about"
              id="about"
              className={styles['form-group__input']}
            />
          </div>
        </div>

        <div className={styles['form-group-container']}>
          <h1>Prestation</h1>
          <div className={styles['form-group']}>
            <label htmlFor="day" className={styles['form-group__label']}>
              24h
            </label>
            <input
              type="number"
              name="day"
              id="day"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="week" className={styles['form-group__label']}>
              Semaine
            </label>
            <input
              type="number"
              name="week"
              id="week"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="week-end" className={styles['form-group__label']}>
              Week-end
            </label>
            <input
              type="number"
              name="week-end"
              id="week-end"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="mon-to-sun" className={styles['form-group__label']}>
              Semaine entiere
            </label>
            <input
              type="number"
              name="mon-to-sun"
              id="mon-to-sun"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="deposit" className={styles['form-group__label']}>
              Caution
            </label>
            <input
              type="number"
              name="deposit"
              id="deposit"
              className={styles['form-group__input']}
            />
          </div>
        </div>

        <div className={styles['form-group-container']}>
          <h1>Kilometre</h1>
          <div className={styles['form-group']}>
            <label htmlFor="km-day" className={styles['form-group__label']}>
              Jour
            </label>
            <input
              type="number"
              name="km-day"
              id="km-day"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="km-week" className={styles['form-group__label']}>
              Semaine
            </label>
            <input
              type="number"
              name="km-week"
              id="km-week"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label
              htmlFor="km-week-end"
              className={styles['form-group__label']}
            >
              Week-end
            </label>
            <input
              type="number"
              name="km-week-end"
              id="km-week-end"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label
              htmlFor="km-mon-to-sun"
              className={styles['form-group__label']}
            >
              Semaine entiere
            </label>
            <input
              type="number"
              name="km-mon-to-sun"
              id="km-mon-to-sun"
              className={styles['form-group__input']}
            />
          </div>
        </div>

        <div className={styles['form-group-container']}>
          <h1>Information du conducteur</h1>
          <div className={styles['form-group']}>
            <label htmlFor="age" className={styles['form-group__label']}>
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className={styles['form-group__input']}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="experience" className={styles['form-group__label']}>
              Experience
            </label>
            <input
              type="number"
              name="experience"
              id="experience"
              className={styles['form-group__input']}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CollectionForm;
