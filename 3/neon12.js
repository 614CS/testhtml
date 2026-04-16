const DATA_API_URL = "https://ep-divine-haze-akvab75y.apirest.c-3.us-west-2.aws.neon.tech/neondb/rest/v1"; // Ejemplo: https://ep-xxx.neon.tech/neondb/rest/v1
const TABLE_NAME = "test";
const JWT_TOKEN = "eyJhbGciOiJFZERTQSIsImtpZCI6IjEwOTJmYjhjLTM3NGMtNDk1ZS1iYTBlLWNmMDA0NTAyYmJjMSJ9.eyJpYXQiOjE3NzYzNzI4MzYsIm5hbWUiOiJqZW5ueSIsImVtYWlsIjoiMTIzNEBnbWFpbC5jb20iLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyNi0wNC0xNlQyMDo1MzoxNy45NTNaIiwidXBkYXRlZEF0IjoiMjAyNi0wNC0xNlQyMDo1MzoxNy45NTNaIiwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJiYW5uZWQiOmZhbHNlLCJiYW5SZWFzb24iOm51bGwsImJhbkV4cGlyZXMiOm51bGwsImlkIjoiNzExNjM2MDQtZTRhYS00Y2Q5LWFlZTItZmM0OTM3NTI2MDY4Iiwic3ViIjoiNzExNjM2MDQtZTRhYS00Y2Q5LWFlZTItZmM0OTM3NTI2MDY4IiwiZXhwIjoxNzc2MzczNzM2LCJpc3MiOiJodHRwczovL2VwLWRpdmluZS1oYXplLWFrdmFiNzV5Lm5lb25hdXRoLmMtMy51cy13ZXN0LTIuYXdzLm5lb24udGVjaCIsImF1ZCI6Imh0dHBzOi8vZXAtZGl2aW5lLWhhemUtYWt2YWI3NXkubmVvbmF1dGguYy0zLnVzLXdlc3QtMi5hd3MubmVvbi50ZWNoIn0.-503zB59a6qmRbf9C3Ez6BBEzUgYV9nr21YQl3hVNNUBPRZWJlH0ZzSMyKgyhT-tyvoz2I5AptcZ1AhIJ0wzDA";

// 2. Realiza la consulta a la tabla
fetch(`${DATA_API_URL}/${TABLE_NAME}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`,
    'Content-Type': 'application/json'
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
