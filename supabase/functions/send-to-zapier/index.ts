import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormData {
  name: string;
  whatsapp: string;
  investment: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");
    
    if (!webhookUrl) {
      console.error("ZAPIER_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Webhook URL not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const formData: FormData = await req.json();
    console.log("Sending form data to Zapier:", formData);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        whatsapp: formData.whatsapp,
        investment: formData.investment,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Zapier webhook returned ${response.status}`);
    }

    console.log("Successfully sent to Zapier");

    return new Response(
      JSON.stringify({ success: true, message: "Data sent to Zapier successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-to-zapier function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
