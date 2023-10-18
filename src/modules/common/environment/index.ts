import * as dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
const SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET || '';
const ENABLE_CATEGORY_MUTATION = process.env.ENABLE_CATEGORY_MUTATION === 'true';

export {
  SUPABASE_URL,
  SUPABASE_KEY,
  SUPABASE_JWT_SECRET,
  ENABLE_CATEGORY_MUTATION
};
