// 1. Define your Neon project details (found in Data API page)
const NEON_DATA_API_URL = 'https://ep-divine-haze-akvab75y.apirest.c-3.us-west-2.aws.neon.tech/neondb/rest/v1';
const TABLE_NAME = 'test';

// 2. Fetch the session/token (if you are on a site with Neon Auth integrated)
// Alternatively, get a manual test token from: your-auth-url.neonauth.tech/reference
const JWT_TOKEN = 'eyJhbGciOiJFZERTQSIsImtpZCI6IjEwOTJmYjhjLTM3NGMtNDk1ZS1iYTBlLWNmMDA0NTAyYmJjMSJ9.eyJpYXQiOjE3NzU4NzkwMjgsIm5hbWUiOiJqZW5ueSIsImVtYWlsIjoiMTIzQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDI2LTA0LTEwVDE3OjMwOjAxLjQxOFoiLCJ1cGRhdGVkQXQiOiIyMDI2LTA0LTExVDAzOjIyOjM5Ljc1N1oiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImJhbm5lZCI6ZmFsc2UsImJhblJlYXNvbiI6bnVsbCwiYmFuRXhwaXJlcyI6bnVsbCwiaWQiOiIxOWEyNDczNi0zNzMxLTRjZWMtYmNmMi03OGNkNGQ2MmU0YTAiLCJzdWIiOiIxOWEyNDczNi0zNzMxLTRjZWMtYmNmMi03OGNkNGQ2MmU0YTAiLCJleHAiOjE3NzU4Nzk5MjgsImlzcyI6Imh0dHBzOi8vZXAtZGl2aW5lLWhhemUtYWt2YWI3NXkubmVvbmF1dGguYy0zLnVzLXdlc3QtMi5hd3MubmVvbi50ZWNoIiwiYXVkIjoiaHR0cHM6Ly9lcC1kaXZpbmUtaGF6ZS1ha3ZhYjc1eS5uZW9uYXV0aC5jLTMudXMtd2VzdC0yLmF3cy5uZW9uLnRlY2gifQ.sBf0XrpurrNlKmy0cQEMeloLeGykhQsT7z5DjiKVPo3YQh6qCTp4-dmVal2bnf6Ex-qIiTD0zbnGkKxYR8_wDA'; 

async function fetchNeonTable() {
  try {
    const response = await fetch(`${NEON_DATA_API_URL}/from/${TABLE_NAME}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.table(data); // Displays the results in a clean table format in the console
  } catch (error) {
    console.error('Error fetching table:', error);
  }
}

fetchNeonTable();
