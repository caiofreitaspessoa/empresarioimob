import { supabase } from "@/integrations/supabase/client";
import { trackLead } from "@/lib/metaPixel";

// Get Facebook cookies for better matching
const getFbCookies = () => {
  const cookies = document.cookie.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split("=");
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return {
    fbc: cookies._fbc || undefined,
    fbp: cookies._fbp || undefined,
  };
};

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  investment?: string;
}

export const useMetaConversions = () => {
  const trackLeadConversion = async (data: LeadData) => {
    // Track on client-side (Pixel)
    trackLead({
      content_name: data.investment || "Lead",
      value: 0,
      currency: "BRL",
    });

    // Track on server-side (Conversions API)
    try {
      const { fbc, fbp } = getFbCookies();

      await supabase.functions.invoke("meta-conversions", {
        body: {
          event_name: "Lead",
          email: data.email,
          phone: data.phone,
          name: data.name,
          event_source_url: window.location.href,
          fbc,
          fbp,
          custom_data: {
            content_name: data.investment || "Lead",
            currency: "BRL",
          },
        },
      });
    } catch (error) {
      console.error("Error sending conversion to Meta API:", error);
    }
  };

  return { trackLeadConversion };
};
