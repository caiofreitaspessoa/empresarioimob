import { useEffect, useState } from "react";
import { initMetaPixel } from "@/lib/metaPixel";
import { supabase } from "@/integrations/supabase/client";

export const MetaPixelProvider = ({ children }: { children: React.ReactNode }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initPixel = async () => {
      if (initialized) return;

      try {
        const { data, error } = await supabase.functions.invoke("get-meta-pixel-id");
        
        if (error) {
          console.error("Error fetching Meta Pixel ID:", error);
          return;
        }

        if (data?.pixelId) {
          initMetaPixel(data.pixelId);
          setInitialized(true);
          console.log("Meta Pixel initialized successfully");
        }
      } catch (error) {
        console.error("Error initializing Meta Pixel:", error);
      }
    };

    initPixel();
  }, [initialized]);

  return <>{children}</>;
};
