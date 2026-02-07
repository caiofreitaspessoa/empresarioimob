-- Create a table for leads
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  investment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (since form is public)
CREATE POLICY "Allow anonymous inserts" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow service role to read all leads
CREATE POLICY "Allow service role to read leads" 
ON public.leads 
FOR SELECT 
USING (true);