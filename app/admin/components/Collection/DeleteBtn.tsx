'use client';

import React from 'react';
import { successPopUp, errorPopUp } from '@/app/components/UI/SuccessPopUp';

function DeleteBtn(props: { carId: string; className: string }) {
  const { className, carId } = props;

  async function deleteCar(carId: string) {
    try {
      const response = await fetch(
        `${process.env.DOMAIN_URL}/api/collection/${carId}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        errorPopUp('Une erreur est survenue.');
        throw new Error(await response.text());
      }

      successPopUp('Article a bien été supprimer.');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <p
      className={className}
      onClick={() => {
        console.log(carId);
        deleteCar(carId);
      }}
    >
      Supprimer
    </p>
  );
}

export default DeleteBtn;
// `${styles['car-list__btn']} ${styles['car-list__btn-delete']}`
