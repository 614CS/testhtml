const API_URL = "https://ep-divine-haze-akvab75y.apirest.c-3.us-west-2.aws.neon.tech/neondb/rest/v1";
const JWT_TOKEN = "eyJhbGciOiJFZERTQSIsImtpZCI6IjEwOTJmYjhjLTM3NGMtNDk1ZS1iYTBlLWNmMDA0NTAyYmJjMSJ9.eyJpYXQiOjE3NzU4ODE5MDIsIm5hbWUiOiJqZW5ueSIsImVtYWlsIjoiMTIzQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDI2LTA0LTEwVDE3OjMwOjAxLjQxOFoiLCJ1cGRhdGVkQXQiOiIyMDI2LTA0LTExVDAzOjIyOjM5Ljc1N1oiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImJhbm5lZCI6ZmFsc2UsImJhblJlYXNvbiI6bnVsbCwiYmFuRXhwaXJlcyI6bnVsbCwiaWQiOiIxOWEyNDczNi0zNzMxLTRjZWMtYmNmMi03OGNkNGQ2MmU0YTAiLCJzdWIiOiIxOWEyNDczNi0zNzMxLTRjZWMtYmNmMi03OGNkNGQ2MmU0YTAiLCJleHAiOjE3NzU4ODI4MDIsImlzcyI6Imh0dHBzOi8vZXAtZGl2aW5lLWhhemUtYWt2YWI3NXkubmVvbmF1dGguYy0zLnVzLXdlc3QtMi5hd3MubmVvbi50ZWNoIiwiYXVkIjoiaHR0cHM6Ly9lcC1kaXZpbmUtaGF6ZS1ha3ZhYjc1eS5uZW9uYXV0aC5jLTMudXMtd2VzdC0yLmF3cy5uZW9uLnRlY2gifQ.PrujCl9t_Y2dIBe_xEF15MTCFtt-Bu1wYytaRY4vIPnZcL-hWhgO5OamgAHHCfsvi6TVBcxldoB496OVyGQQBQ";
const DATABASE = "test";

async function fetchNeonTable() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${JWT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "SELECT * FROM test LIMIT 10",
      database: DATABASE,
    }),
  });

  const data = await response.json();
  console.log(data); // Displays the table in the console
}

fetchNeonTable();
