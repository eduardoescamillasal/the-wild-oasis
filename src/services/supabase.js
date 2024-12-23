import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wtbjninwvbhnyandczcg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YmpuaW53dmJobnlhbmRjemNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MjI0NDEsImV4cCI6MjA0OTE5ODQ0MX0.TxEwK5vvcMPiihzTXnFeDNLOdb8cjY0CjwhafdY6JaU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
