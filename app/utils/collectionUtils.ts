export async function getCollection() {
  try {
    const response = await fetch('http://localhost:3000/api/collection', {
      method: 'GET',
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
  return data.filter((car: { id: string }) => car.id === paramsId)[0];
};
