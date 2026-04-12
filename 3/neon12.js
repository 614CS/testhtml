import { neon } from 'https://cdn.jsdelivr.net/npm/@neondatabase/serverless@1.0.2/+esm';

// Retrieve the JWT token (implementation depends on your auth system)
//const authToken = getAuthToken();

// Initialize the Neon client with connection string and auth token
const ANONYMIZED_DATABASE_URL = "postgresql://anonymous@ep-divine-haze-akvab75y.c-3.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(process.env.ANONYMIZED_DATABASE_URL);

// Run a query
const posts = await sql('SELECT * FROM test');
console.log('Fetched Data:', posts)

// See https://neon.com/docs/serverless/serverless-driver
// for more information
