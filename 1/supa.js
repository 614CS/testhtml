
const DATA_API_URL = 'https://ep-weathered-haze-akbm51ki.neonauth.c-3.us-west-2.aws.neon.tech/neondb/auth/.well-known/jwks.json';
const TABLE_NAME = 'test';

   fetch(`${DATA_API_URL}/${TABLE_NAME}`)
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error("Error:", error));


//                getData()
