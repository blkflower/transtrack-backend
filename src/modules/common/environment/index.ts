import * as dotenv from 'dotenv';

dotenv.config();

export const SUPABASE_URL = process.env.SUPABASE_URL || '';
export const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
export const SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET || '';
export const ENABLE_CATEGORY_MUTATION = process.env.ENABLE_CATEGORY_MUTATION === 'true';
