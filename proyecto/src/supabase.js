// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://exipjalotdxarvzvsqgm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4aXBqYWxvdGR4YXJ2enZzcWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzg2NDYsImV4cCI6MjA2MjkxNDY0Nn0.YebpusdJ2IUsaLrU97-CdAtduZOwJ4dNat5ouXS3bgA';
export const supabase = createClient(supabaseUrl, supabaseKey);