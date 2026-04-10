
const API_KEY = 'napi_iuh650mzge7ia63v9zg8tlakuucu2gnkjth47qqakpl30k1lay2kfoy3768mo2uf';
const DATA_API_URL = 'https://ep-weathered-haze-akbm51ki.apirest.c-3.us-west-2.aws.neon.tech/neondb/rest/v1';
const TABLE_NAME = 'test';

				async function getData() {
  try {
    const response = await fetch(`${DATA_API_URL}/${TABLE_NAME}?select=*`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


                getData()
