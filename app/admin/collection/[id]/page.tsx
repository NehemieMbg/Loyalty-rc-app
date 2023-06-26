'use client';

import CollectionForm from '../../components/CollectionForm/CollectionForm';
import { getCarData } from '@/app/utils/collectionUtils';
import { useParams } from 'next/navigation';

async function getData() {
  // const params = useParams();
  // const carData = await getCarData(params.id);
  // return carData;

  const response = await fetch('/api/collection', {
    method: 'GET',
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = response.json();
  return data;
}

async function EditCar() {
  const carData = await getData();
  console.log(carData);
  // Get data as an object whitch is filtered with the params passed
  // const getCarDataHanlder = useCallback(async (params: string) => {
  //   setCarData(await getCarData(params));
  // }, []);

  // console.log('Car Data: ', carData);

  return (
    <div>
      <CollectionForm method={'PUT'} carData={carData} />
    </div>
  );
}

export default EditCar;
