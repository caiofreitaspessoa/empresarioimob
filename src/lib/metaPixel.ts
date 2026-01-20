// Meta Pixel helper functions
declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[][];
      loaded?: boolean;
      version?: string;
    };
    _fbq: unknown;
  }
}

export const initMetaPixel = (pixelId: string) => {
  if (typeof window === 'undefined') return;
  
  // Initialize fbq if not already done
  if (!window.fbq) {
    const n = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod.apply(n, args);
      } else {
        n.queue.push(args);
      }
    } as Window['fbq'];
    
    n.queue = [];
    n.loaded = true;
    n.version = '2.0';
    
    if (!window._fbq) {
      window._fbq = n;
    }
    
    window.fbq = n;
    
    // Load Facebook Pixel script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }
  
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

export const trackLead = (params?: { 
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  trackEvent('Lead', params);
};

export const trackCompleteRegistration = (params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  trackEvent('CompleteRegistration', params);
};
