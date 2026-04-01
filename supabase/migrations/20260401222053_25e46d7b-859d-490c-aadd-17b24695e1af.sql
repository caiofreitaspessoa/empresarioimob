
DROP TRIGGER IF EXISTS leads_pluga_webhook_trigger ON public.leads;
DROP TRIGGER IF EXISTS leads_pluga_webhook ON public.leads;
DROP FUNCTION IF EXISTS public.notify_pluga_webhook() CASCADE;

CREATE OR REPLACE FUNCTION public.notify_pluga_webhook()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'extensions'
AS $$
DECLARE
  payload jsonb;
BEGIN
  IF TG_OP = 'INSERT' THEN
    payload := jsonb_build_object(
      'type', 'INSERT',
      'table', TG_TABLE_NAME,
      'schema', TG_TABLE_SCHEMA,
      'record', row_to_json(NEW)::jsonb,
      'old_record', null
    );
  ELSIF TG_OP = 'UPDATE' THEN
    payload := jsonb_build_object(
      'type', 'UPDATE',
      'table', TG_TABLE_NAME,
      'schema', TG_TABLE_SCHEMA,
      'record', row_to_json(NEW)::jsonb,
      'old_record', row_to_json(OLD)::jsonb
    );
  END IF;

  PERFORM net.http_post(
    url := 'https://hooks.pluga.co/v2/webhooks/MTcxMDc0MjUxNjc2NDQzMDYyMDlUMTc3NTA4MTk5Mg',
    body := payload,
    headers := jsonb_build_object('Content-Type', 'application/json')
  );

  RETURN NEW;
END;
$$;

CREATE TRIGGER leads_pluga_webhook
  AFTER INSERT OR UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_pluga_webhook();
