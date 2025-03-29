export default async function getData(endpoint) {
  // use fetch to get data from api
  const data = await fetch(`https://ishop-api.istad.co/api/v1/${endpoint}`).then(
    (response) => response.json()
  );
  return data;
}
