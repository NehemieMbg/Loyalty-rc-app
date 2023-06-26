'use client';
import { useRef, useState } from 'react';
import styles from './CollectionForm.module.scss';
import { errorPopUp, successPopUp } from '@/app/components/UI/SuccessPopUp';
import { clearInuputs } from '@/app/utils/formUtils';

function CollectionForm() {
  const [imagesArr, setImagesArr] = useState([] as string[]);
  const makeRef = useRef<HTMLInputElement>(null);
  const modelRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const engineRef = useRef<HTMLInputElement>(null);
  const maxPowerRef = useRef<HTMLInputElement>(null);
  const topSpeedRef = useRef<HTMLInputElement>(null);
  const accelerationRef = useRef<HTMLInputElement>(null);
  const transmissionRef = useRef<HTMLSelectElement>(null);
  const imagesRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const dayPriceRef = useRef<HTMLInputElement>(null);
  const weekPriceRef = useRef<HTMLInputElement>(null);
  const weekEndPriceRef = useRef<HTMLInputElement>(null);
  const monToSunPriceRef = useRef<HTMLInputElement>(null);
  const dayKmRef = useRef<HTMLInputElement>(null);
  const weekKmRef = useRef<HTMLInputElement>(null);
  const weekEndKmRef = useRef<HTMLInputElement>(null);
  const monToSunKmRef = useRef<HTMLInputElement>(null);
  const driverAgeRef = useRef<HTMLInputElement>(null);
  const driverExperienceRef = useRef<HTMLInputElement>(null);
  const depositRef = useRef<HTMLInputElement>(null);

  function addImagesHandler(event: React.FormEvent) {
    event.preventDefault();

    const imageLink = imagesRef.current!.value as string;
    if (!imageLink) return;
    setImagesArr([...imagesArr, imageLink]);

    // reset the input to empty string
    imagesRef.current!.value = '';
  }

  function removeImageHandler(index: number) {
    console.log(index);
    setImagesArr(imagesArr.filter((image, idx) => idx !== index));
  }

  async function addCar(event: React.FormEvent) {
    event.preventDefault();

    const make = makeRef.current?.value;
    const model = modelRef.current?.value;
    const year = yearRef.current?.value;
    const engine = engineRef.current?.value;
    const maxPower = maxPowerRef.current?.value;
    const topSpeed = topSpeedRef.current?.value;
    const acceleration = accelerationRef.current?.value;
    const transmission = transmissionRef.current?.value;
    const images = imagesArr;
    const about = aboutRef.current?.value;
    const dayPrice = dayPriceRef.current?.value;
    const weekPrice = weekPriceRef.current?.value;
    const weekEndPrice = weekEndPriceRef.current?.value;
    const monToSunPrice = monToSunPriceRef.current?.value;
    const dayKm = dayKmRef.current?.value;
    const weekKm = weekKmRef.current?.value;
    const weekEndKm = weekEndKmRef.current?.value;
    const monToSunKm = monToSunKmRef.current?.value;
    const driverAge = driverAgeRef.current?.value;
    const driverExperience = driverExperienceRef.current?.value;
    const deposit = depositRef.current?.value;

    try {
      const response = await fetch('/api/collection', {
        method: 'POST',
        body: JSON.stringify({
          make,
          model,
          year,
          engine,
          maxPower,
          topSpeed,
          acceleration,
          transmission,
          images,
          about,
          dayPrice,
          weekPrice,
          weekEndPrice,
          monToSunPrice,
          dayKm,
          weekKm,
          weekEndKm,
          monToSunKm,
          driverAge,
          driverExperience,
          deposit,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        if (!response.ok) {
          const error = await response.text();

          errorPopUp("Une erreur s'est produite");
          throw new Error(error);
        }

        setImagesArr([] as string[]);
        makeRef.current!.value = '';
        modelRef.current!.value = '';
        yearRef.current!.value = '';
        engineRef.current!.value = '';
        maxPowerRef.current!.value = '';
        topSpeedRef.current!.value = '';
        accelerationRef.current!.value = '';
        transmissionRef.current!.value = '';
        aboutRef.current!.value = '';
        dayPriceRef.current!.value = '';
        weekPriceRef.current!.value = '';
        weekEndPriceRef.current!.value = '';
        monToSunPriceRef.current!.value = '';
        dayKmRef.current!.value = '';
        weekKmRef.current!.value = '';
        weekEndKmRef.current!.value = '';
        monToSunKmRef.current!.value = '';
        driverAgeRef.current!.value = '';
        driverExperienceRef.current!.value = '';
        depositRef.current!.value = '';
        successPopUp(await response.text());
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles['form-container']}>
      <form action="" className={styles.form}>
        <div className={styles['form-group-container']}>
          <h1 className={styles['title']}>Véhicule</h1>
          <div className={styles['form-group']}>
            <label htmlFor="make" className={styles['form-group__label']}>
              Marque
            </label>
            <input
              type="text"
              name="make"
              id="make"
              className={styles['form-group__input']}
              ref={makeRef}
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
              ref={modelRef}
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
              ref={yearRef}
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
              ref={engineRef}
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
              ref={maxPowerRef}
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
              ref={topSpeedRef}
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
              ref={accelerationRef}
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
              ref={transmissionRef}
            >
              <option value="automatique">Automatique</option>
              <option value="manuelle">Manuelle</option>
            </select>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="images" className={styles['form-group__label']}>
              Liens Images
            </label>
            <input
              type="text"
              name="images"
              id="images"
              className={styles['form-group__input']}
              ref={imagesRef}
            />
            <ul className={styles['images-link__container']}>
              {imagesArr.map((image, index) => (
                <li
                  key={index}
                  className={styles['images-link-list']}
                  onClick={() => removeImageHandler(index)}
                >
                  <p className={styles['remove-link']}>&times;</p>
                  <p>{image}</p>
                </li>
              ))}
            </ul>
            <button
              className={`${styles.btn} ${styles['btn-add']}`}
              onClick={addImagesHandler}
            >
              Ajouter
            </button>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="about" className={styles['form-group__label']}>
              A Propos
            </label>
            <textarea
              name="about"
              id="about"
              rows={8}
              className={styles['form-group__input']}
              ref={aboutRef}
            />
          </div>
        </div>

        <div className={styles['form-group-container']}>
          <h1 className={styles['title']}>Prestation</h1>
          <div className={styles['form-group']}>
            <label htmlFor="day" className={styles['form-group__label']}>
              24h
            </label>
            <input
              type="number"
              name="day"
              id="day"
              className={styles['form-group__input']}
              ref={dayPriceRef}
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
              ref={weekPriceRef}
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
              ref={weekEndPriceRef}
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
              ref={monToSunPriceRef}
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
              ref={depositRef}
            />
          </div>
        </div>

        <div className={styles['form-group-container']}>
          <h1 className={styles['title']}>Kilometre</h1>
          <div className={styles['form-group']}>
            <label htmlFor="km-day" className={styles['form-group__label']}>
              Jour
            </label>
            <input
              type="number"
              name="km-day"
              id="km-day"
              className={styles['form-group__input']}
              ref={dayKmRef}
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
              ref={weekKmRef}
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
              ref={weekEndKmRef}
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
              ref={monToSunKmRef}
            />
          </div>
        </div>

        <div
          className={`${styles['form-group-container']} ${styles['drivers-info']}`}
        >
          <h1 className={styles['title']}>Information du conducteur</h1>
          <div className={styles['form-group']}>
            <label htmlFor="age" className={styles['form-group__label']}>
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className={styles['form-group__input']}
              ref={driverAgeRef}
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
              ref={driverExperienceRef}
            />
          </div>
        </div>

        <div>
          <button
            className={`${styles.btn} ${styles['btn-save']}`}
            onClick={addCar}
          >
            Sauvegarder
          </button>
          {/* <button className={`${styles.btn} ${styles['btn-cancel']}`}>
            Annuler
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default CollectionForm;
