import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false }
});

export type Project = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string | null;
  project_url: string;
  image_url: string | null;
  author: string;
  is_collaborative: boolean;
  collaborators: string[];
  started_at: string | null;
  finished_at: string | null;
  tools_used: string[];
};

export type Avatar = {
  id: number;
  image_url: string;
};