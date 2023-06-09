'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './CollectionForm.module.scss';
import { errorPopUp, successPopUp } from '@/app/components/UI/SuccessPopUp';
import Link from 'next/link';

function CollectionForm(props: any) {
  const { carData } = props;

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

  useEffect(() => {
    if (carData) {
      if (makeRef.current) makeRef.current.value = carData.make;
      if (modelRef.current) modelRef.current.value = carData.model;
      if (yearRef.current) yearRef.current.value = carData.year;
      if (engineRef.current) engineRef.current.value = carData.engine;
      if (maxPowerRef.current) maxPowerRef.current.value = carData.maxPower;
      if (topSpeedRef.current) topSpeedRef.current.value = carData.topSpeed;
      if (accelerationRef.current)
        accelerationRef.current.value = carData.acceleration;
      if (transmissionRef.current)
        transmissionRef.current.value = carData.transmission;
      setImagesArr(carData.images);
      if (aboutRef.current) aboutRef.current.value = carData.about;
      if (dayPriceRef.current) dayPriceRef.current.value = carData.dayPrice;
      if (weekPriceRef.current) weekPriceRef.current.value = carData.weekPrice;
      if (weekEndPriceRef.current)
        weekEndPriceRef.current.value = carData.weekEndPrice;
      if (monToSunPriceRef.current)
        monToSunPriceRef.current.value = carData.monToSunPrice;
      if (depositRef.current) depositRef.current.value = carData.deposit;
      if (dayKmRef.current) dayKmRef.current.value = carData.dayKm;
      if (weekKmRef.current) weekKmRef.current.value = carData.weekKm;
      if (weekEndKmRef.current) weekEndKmRef.current.value = carData.weekEndKm;
      if (monToSunKmRef.current)
        monToSunKmRef.current.value = carData.monToSunKm;
      if (driverAgeRef.current) driverAgeRef.current.value = carData.driverAge;
      if (driverExperienceRef.current)
        driverExperienceRef.current.value = carData.driverExperience;
    }
  }, []);

  function addImagesHandler(event: React.FormEvent) {
    event.preventDefault();

    const imageLink = imagesRef.current!.value as string;
    if (!imageLink) return;
    setImagesArr([...imagesArr, imageLink]);

    // reset the input to empty string
    imagesRef.current!.value = '';
  }

  function removeImageHandler(index: number) {
    setImagesArr(imagesArr.filter((image, idx) => idx !== index));
  }

  async function addCar(event: React.FormEvent) {
    event.preventDefault();

    try {
      if (props.method === 'POST') {
        const response = await fetch('/api/collection', {
          method: 'POST', // method passed through props (POST or PUT)
          body: JSON.stringify({
            make: makeRef.current?.value,
            model: modelRef.current?.value,
            year: yearRef.current?.value,
            engine: engineRef.current?.value,
            maxPower: maxPowerRef.current?.value,
            topSpeed: topSpeedRef.current?.value,
            acceleration: accelerationRef.current?.value,
            transmission: transmissionRef.current?.value,
            images: imagesArr,
            about: aboutRef.current?.value,
            dayPrice: dayPriceRef.current?.value,
            weekPrice: weekPriceRef.current?.value,
            weekEndPrice: weekEndPriceRef.current?.value,
            monToSunPrice: monToSunPriceRef.current?.value,
            dayKm: dayKmRef.current?.value,
            weekKm: weekKmRef.current?.value,
            weekEndKm: weekEndKmRef.current?.value,
            monToSunKm: monToSunKmRef.current?.value,
            driverAge: driverAgeRef.current?.value,
            driverExperience: driverExperienceRef.current?.value,
            deposit: depositRef.current?.value,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          if (!response.ok) {
            const error = await response.text();

            errorPopUp("Une erreur s'est produite");
            throw new Error(error);
          }
        }
        successPopUp(await response.text());
      }

      if (props.method === 'PUT') {
        const response = await fetch('/api/collection', {
          method: 'PUT', // method passed through props (POST or PUT)
          body: JSON.stringify({
            carId: carData.id,
            make: makeRef.current?.value,
            model: modelRef.current?.value,
            year: yearRef.current?.value,
            engine: engineRef.current?.value,
            maxPower: maxPowerRef.current?.value,
            topSpeed: topSpeedRef.current?.value,
            acceleration: accelerationRef.current?.value,
            transmission: transmissionRef.current?.value,
            images: imagesArr,
            about: aboutRef.current?.value,
            dayPrice: dayPriceRef.current?.value,
            weekPrice: weekPriceRef.current?.value,
            weekEndPrice: weekEndPriceRef.current?.value,
            monToSunPrice: monToSunPriceRef.current?.value,
            dayKm: dayKmRef.current?.value,
            weekKm: weekKmRef.current?.value,
            weekEndKm: weekEndKmRef.current?.value,
            monToSunKm: monToSunKmRef.current?.value,
            driverAge: driverAgeRef.current?.value,
            driverExperience: driverExperienceRef.current?.value,
            deposit: depositRef.current?.value,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          if (!response.ok) {
            const error = await response.text();

            errorPopUp("Une erreur s'est produite");
            throw new Error(error);
          }
        }
        successPopUp(await response.text());
      }
    } catch (error) {
      console.error(error);
    }
    if (props.method === 'POST') {
      setImagesArr([] as string[]);
      makeRef.current!.value = '';
      modelRef.current!.value = '';
      yearRef.current!.value = '';
      engineRef.current!.value = '';
      maxPowerRef.current!.value = '';
      topSpeedRef.current!.value = '';
      accelerationRef.current!.value = '';
      transmissionRef.current!.value = '';
      imagesRef.current!.value = '';
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
    }
  }

  return (
    <div className={styles['form-container']}>
      <Link href={'/admin/collection'} className={styles['previous-page']}>
        <p>
          <span>&larr;</span> collection
        </p>
      </Link>
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
        </div>
      </form>
    </div>
  );
}

export default CollectionForm;
