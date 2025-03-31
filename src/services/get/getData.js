export default async function getData(endpoint) {
  // use fetch to get data from api
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`).then(
    (response) => response.json()
  );
  return data;
}
