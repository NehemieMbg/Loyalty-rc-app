export async function getCollection() {
  try {
    const response = await fetch('/api/collection', {
      method: 'GET',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      return await response.json(); // Parse the response body as JSON
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    // Handler error
    console.error('Error', error);
  }
}

export const getCarData = async (paramsId: string) => {
  const data = await getCollection();
  console.log(
    'From utils: ',
    data.filter((car: { id: string }) => car.id === paramsId)
  );
  return data.filter((car: { id: string }) => car.id === paramsId);
};
