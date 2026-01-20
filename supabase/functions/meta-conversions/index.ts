import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConversionEvent {
  event_name: string;
  event_time: number;
  action_source: string;
  user_data: {
    em?: string[]; // hashed email
    ph?: string[]; // hashed phone
    fn?: string[]; // hashed first name
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string;
    fbp?: string;
  };
  custom_data?: Record<string, unknown>;
  event_source_url?: string;
}

interface RequestBody {
  event_name: string;
  email?: string;
  phone?: string;
  name?: string;
  event_source_url?: string;
  custom_data?: Record<string, unknown>;
  fbc?: string;
  fbp?: string;
}

// Hash function for user data (SHA-256)
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const pixelId = Deno.env.get("META_PIXEL_ID");
    const accessToken = Deno.env.get("META_CONVERSIONS_API_TOKEN");

    if (!pixelId || !accessToken) {
      console.error("Missing Meta Pixel ID or Access Token");
      return new Response(
        JSON.stringify({ error: "Meta configuration missing" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body: RequestBody = await req.json();
    const { event_name, email, phone, name, event_source_url, custom_data, fbc, fbp } = body;

    // Build user data with hashed values
    const userData: ConversionEvent["user_data"] = {
      client_ip_address: req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || undefined,
      client_user_agent: req.headers.get("user-agent") || undefined,
    };

    if (email) {
      userData.em = [await hashData(email)];
    }

    if (phone) {
      // Clean phone number (remove non-digits)
      const cleanPhone = phone.replace(/\D/g, "");
      userData.ph = [await hashData(cleanPhone)];
    }

    if (name) {
      // Get first name only
      const firstName = name.split(" ")[0];
      userData.fn = [await hashData(firstName)];
    }

    if (fbc) {
      userData.fbc = fbc;
    }

    if (fbp) {
      userData.fbp = fbp;
    }

    const eventData: ConversionEvent = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      user_data: userData,
      event_source_url,
      custom_data,
    };

    // Send to Meta Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [eventData],
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta API error:", result);
      return new Response(
        JSON.stringify({ error: "Failed to send event to Meta", details: result }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Meta Conversion event sent successfully:", result);

    return new Response(
      JSON.stringify({ success: true, result }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in meta-conversions function:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
