
const API_KEY = 'napi_ov9rffpv8o4so3as87f8ekgxoqdkrzuh1draa2w125yc91xoijpvvt4gwf2u8712';
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
