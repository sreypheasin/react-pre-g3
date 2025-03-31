export default async function postData(endpoint, body) {
  // use fetch to get data from api
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then((response) => response.json());
  return data;
}
