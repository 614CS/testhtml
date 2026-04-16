const DATA_API_URL = "https://ep-divine-haze-akvab75y.apirest.c-3.us-west-2.aws.neon.tech/neondb/rest/v1"; // Ejemplo: https://ep-xxx.neon.tech/neondb/rest/v1
const TABLE_NAME = "test";
const JWT_TOKEN = "eyJhbGciOiJFZERTQSIsImtpZCI6IjEwOTJmYjhjLTM3NGMtNDk1ZS1iYTBlLWNmMDA0NTAyYmJjMSJ9.eyJpYXQiOjE3NzU5NDEwNjQsIm5hbWUiOiJqZW5ueSIsImVtYWlsIjoiMTIzQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDI2LTA0LTEwVDE3OjMwOjAxLjQxOFoiLCJ1cGRhdGVkQXQiOiIyMDI2LTA0LTExVDAzOjIyOjM5Ljc1N1oiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImJhbm5lZCI6ZmFsc2UsImJhblJlYXNvbiI6bnVsbCwiYmFuRXhwaXJlcyI6bnVsbCwiaWQiOiIxOWEyNDczNi0zNzMxLTRjZWMtYmNmMi03OGNkNGQ2MmU0YTAiLCJzdWIiOiIxOWEyNDczNi0zNzMxLTRjZWMtYmNmMi03OGNkNGQ2MmU0YTAiLCJleHAiOjE3NzU5NDE5NjQsImlzcyI6Imh0dHBzOi8vZXAtZGl2aW5lLWhhemUtYWt2YWI3NXkubmVvbmF1dGguYy0zLnVzLXdlc3QtMi5hd3MubmVvbi50ZWNoIiwiYXVkIjoiaHR0cHM6Ly9lcC1kaXZpbmUtaGF6ZS1ha3ZhYjc1eS5uZW9uYXV0aC5jLTMudXMtd2VzdC0yLmF3cy5uZW9uLnRlY2gifQ.LM0OGlh2nvHCsJZheZhsj3L3OokcvH0u8NsXdvu0wSUqVqzJAxq_t22k7wMxuD9dUzCMLXCHSDInrpuGgwSmBA";

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
