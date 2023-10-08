import fs from 'node:fs';
import path from 'node:path';
import { Client } from 'pg';

const REMOTE_DATABASE_URL = process.env.REMOTE_DATABASE_URL;
if (!REMOTE_DATABASE_URL) {
    throw new Error('Environment variable "REMOTE_DATABASE_URL" is not defined.');
}

const client = new Client({
    connectionString: REMOTE_DATABASE_URL,
});
const seedPath = path.resolve(__dirname, 'seed.sql');

(async () => {
    const seed = await fs.promises.readFile(seedPath, 'utf8');

    await client.connect();
    await client.query(seed);
    await client.end();
})();
