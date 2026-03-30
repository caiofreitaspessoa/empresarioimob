
CREATE OR REPLACE FUNCTION public.notify_pluga_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  payload jsonb;
  event_type text;
BEGIN
  IF TG_OP = 'INSERT' THEN
    event_type := 'INSERT';
    payload := jsonb_build_object(
      'type', event_type,
      'table', TG_TABLE_NAME,
      'schema', TG_TABLE_SCHEMA,
      'record', row_to_json(NEW)::jsonb,
      'old_record', null
    );
  ELSIF TG_OP = 'UPDATE' THEN
    event_type := 'UPDATE';
    payload := jsonb_build_object(
      'type', event_type,
      'table', TG_TABLE_NAME,
      'schema', TG_TABLE_SCHEMA,
      'record', row_to_json(NEW)::jsonb,
      'old_record', row_to_json(OLD)::jsonb
    );
  END IF;

  PERFORM net.http_post(
    url := 'https://hooks.pluga.co/v2/webhooks/MTcxMDc0MjUxNjc2NDQzMDYyMDlUMTc3NDg5ODEyNQ',
    body := payload,
    headers := jsonb_build_object('Content-Type', 'application/json')
  );

  RETURN NEW;
END;
$$;
