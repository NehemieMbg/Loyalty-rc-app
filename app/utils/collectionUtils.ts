export async function getCollection() {
  try {
    const response = await fetch('/api/collection', {
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
