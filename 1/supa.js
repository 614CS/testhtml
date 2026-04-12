import { createClient } from 'https://cdn.jsdelivr.net/npm/@libsql/client@0.17.2/+esm'; 
       
const client = createClient({
  url: "libsql://test-junyu.aws-us-east-2.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3NzYwNTM0NzYsImlhdCI6MTc3NTk2NzA3NiwiaWQiOiIwMTlkN2UyOS1iZDAxLTcxYTUtODE0Ni02ZDNmYjQyMzY2ZjEiLCJyaWQiOiI1NjUyZjY3NC03Y2E1LTRhYzQtODY0OC1kMDFkMzdmOWExMDYifQ.wSXrCodXMYmXYxyALcRs5KlS5RYOUw8-npoO-m_fZZmcX10eIU8o2-7b8B9CWRz0pHetNDkblleIUDbWhzzQAw"
});

async function showTable() {
  try {
    const rs = await client.execute("SELECT * FROM test");
    console.table(rs.rows); // Using console.table displays it as a formatted table
  } catch (e) {
    console.error(e);
  }
}

showTable();


