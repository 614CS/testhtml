import { createClient } from 'https://cdn.jsdelivr.net/npm/@libsql/client@0.17.2/+esm'; 
       
const client = createClient({
  url: "libsql://test-junyu.aws-us-east-2.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3NzY5NzY2MTksImlhdCI6MTc3NjM3MTgxOSwiaWQiOiIwMTlkN2UyOS1iZDAxLTcxYTUtODE0Ni02ZDNmYjQyMzY2ZjEiLCJyaWQiOiI1NjUyZjY3NC03Y2E1LTRhYzQtODY0OC1kMDFkMzdmOWExMDYifQ.JJVpkae4Zbs3HMnIy8SIbJBHGykZwyFCKsZGuY8WgT26vqyVACi1UrtJ9YcBLgL5AwsvKJwbwMfG84fDBvAUBA"
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
