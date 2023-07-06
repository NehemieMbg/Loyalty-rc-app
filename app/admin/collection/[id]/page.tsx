import CollectionForm from '../../components/CollectionForm/CollectionForm';

import { getCarData } from '@/app/utils/collectionUtils';

export const revalidate = 0;

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const carData = await getCarData(params.id);
  console.log(carData);

  return (
    <div>
      <CollectionForm method={'PUT'} carData={carData} />
    </div>
  );
}
