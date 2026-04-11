const DATA_API_URL = "https://ep-still-grass-a88vqwik.apirest.eastus2.azure.neon.tech/neondb/rest/v1";
const TABLE_NAME = "test";

fetch(`${DATA_API_URL}/${TABLE_NAME}`, {
  method: 'GET',
  headers: {
        'Accept': 'application/json'
      }

})
.then(response => {
  if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
  return response.json();
})
.then(data => {
  console.log(`Datos de la tabla "${TABLE_NAME}":`);
  console.table(data); // Muestra los datos en formato de tabla visual en la consola
})
.catch(error => console.error('Error al consultar Neon:', error));
